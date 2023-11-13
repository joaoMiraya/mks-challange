import { styled } from 'styled-components';
import { AiOutlineShopping } from 'react-icons/ai';
import { useQuery } from "react-query";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../services/redux/cartSlice';
import ProductsPlaceholder from './ProductsPlaceholder';


function Products() {

    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=DESC");
        const data = await response.json();
        return data;
    };

    const { data, isLoading, isError } = useQuery('data', fetchData);


    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    };


    const ProductsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    `;

    const ProductsCard = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    min-height: 18rem;
    max-width: 13rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px #00000020;
    margin-top: 3rem;
   
    `;
    const CardTitle = styled.h2`
   font-size: 1.2rem;       
   font-weight: medium;
   margin: .8rem 0;
   padding: 0 1rem;

    `;
    const CardDescription = styled.p`
     font-size: .7rem;
    font-weight: lighter;
    text-align: center;
    margin-bottom: .5rem;
    padding: .3rem;
    
    `;

    const BuyButton = styled.button`
    background-color: #0F52BA;
    padding: .5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 0 0 1rem 1rem ;
    transition: all .2s ease;
    cursor: pointer;
    &:hover {
        background-color: #7E85BA ;  
     };
    `;


    return (
        <>
            {isLoading && <ProductsPlaceholder />}
            {isError && <p>Ocorreu um erro ao buscar os dados da API</p>}

            <ProductsRow>
                {data?.products.map((item) => {
                    return (
                        <ProductsCard key={item.id}>
                            <img src={item.photo} width={150} height={150} alt={item.name} />
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <BuyButton onClick={() => handleAddToCart(item)}><AiOutlineShopping size={25} />Comprar</BuyButton>
                        </ProductsCard>
                    )
                })}
            </ProductsRow>

        </>
    )
}

export default Products;