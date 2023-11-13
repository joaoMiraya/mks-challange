import { styled } from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setShowBar } from '../../services/redux/appSlice';
import CartItem from '../utils/CartItem';
import { useEffect, useState } from 'react';

function SideBar() {

    const dispatch = useDispatch();

    const { showBar } = useSelector(state => state.app);
    const { cartItems } = useSelector(state => state.cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let subTotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            let value = cartItems[i].cartQuantity * cartItems[i].price;
            subTotal += value;
        }
        setTotal(subTotal);
    }, [cartItems]);

    console.log(total);

    const handleOpenMenu = () => {
        dispatch(setShowBar());
    };

    const CartComp = styled.aside`
    position: absolute;
    top: 0;
    right: ${showBar ? '0' : '100vw'};
    transition: all ease 1s;
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 ;
    background-color:  #0F52BA;
     `;

    const CartTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    width: 50%;
    text-align: start;

    `;

    const CartCloseButton = styled.span`
    color: white;
    position: absolute;
    top:  1rem;
    right: 1rem;
    transition: all .2s ease;
    cursor: pointer;
        &:hover {
        color: #AA163A ;  
     };
    `;
    const ItemsContent = styled.div`
     display: flex;
     flex-direction: column;
     padding: 1rem;
     gap: 1rem;
     overflow-y: auto;
     max-height: 50%;
    `;
    const TotalContent = styled.div`
     display: flex;
     justify-content: space-around;
     position: absolute;
     color: white;
     width: 100%;
     bottom: 8rem;
     padding: 2rem 0
    `;
    const Total = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    `;

    const BuyButton = styled.button`
    display: flex;
    justify-content: space-around;
    position: absolute;
    color: white;
    background-color: #000000;
    width: 100%;
    bottom: 4rem;
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
   `;
    return (

        <CartComp>
            <CartCloseButton onClick={() => handleOpenMenu()}> <AiOutlineCloseCircle size={25} /> </CartCloseButton>
            <CartTitle>Carrinho de compras</CartTitle>
            <ItemsContent>
                {cartItems.map((item) => {
                    return (
                        <span key={item.id}>
                            <CartItem item={item} />
                        </span>
                    )
                })}
            </ItemsContent>
            <TotalContent>
                <h2>Total:</h2>
                <Total>R${total}</Total>
            </TotalContent>
            <BuyButton>Finalizar</BuyButton>
        </CartComp>
    )
}

export default SideBar;