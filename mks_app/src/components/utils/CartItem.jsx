import styled from "styled-components";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../services/redux/cartSlice";
import { useEffect, useState } from "react";

function CartItem({ item }) {
    CartItem.propTypes = {
        item: PropTypes.object.isRequired,
    };

    const dispatch = useDispatch();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (item) {
            setTotal(item.price * item.cartQuantity)
        }
    }, [item]);

    const handleRemoveItem = () => {
        dispatch(removeFromCart(item));
    };
    const handleIncressItem = () => {
        dispatch(addToCart(item))
    };

    const handleDecressItem = (item) => {
        dispatch(decreaseCart(item))
    };

    const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    heigth: 6rem;
    position: relative;
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: .7rem;
    `;
    const RemoveItem = styled.span`
   font-size: 1rem;
   color: white;
   background-color: black;
   padding: 6px; 
   border-radius: 100%;
   position: absolute;
   top: -15px;
   right: -5px;
   cursor: pointer;
    `;
    const CartItemTitle = styled.h3`
    font-size: .8rem;
    text-align: center;
    font-weight: lighter;
    `;
    const QuantityButton = styled.div`
    display: flex;
    padding: 5px;
    margin: 0 1rem;
    justify-content: space-between;
    position: relative;
    border: 1px solid #c1c1c1;
    border-radius: .4rem;
    `;
    const QuantityButtonLabel = styled.div`
    position: absolute;
    top: -1rem;
    font-size: .8rem
    `;

    const QuantityButtonIncress = styled.span`
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-left: 1px solid #c1c1c1;
    padding: 0 .3rem;
    `;

    const QuantityButtonQuantity = styled.span`
    margin: 0 .3rem;
    `;

    const QuantityButtonDecress = styled.span`
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-right: 1px solid #c1c1c1;
    padding: 0 .3rem;
    `;
    const QuantityButtonSubTotal = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    
    `;

    return (

        <CardItem>
            <RemoveItem onClick={() => handleRemoveItem()}>X</RemoveItem>

            <img width={50} height={50} src={item.photo} alt={item.title} />

            <CartItemTitle>{item.name}</CartItemTitle>

            <QuantityButton>
                <QuantityButtonLabel>Qtd:</QuantityButtonLabel>
                <QuantityButtonDecress onClick={() => handleDecressItem(item)}>-</QuantityButtonDecress>
                <QuantityButtonQuantity>{item.cartQuantity}</QuantityButtonQuantity>
                <QuantityButtonIncress onClick={() => handleIncressItem(item)}>+</QuantityButtonIncress>
            </QuantityButton>

            <QuantityButtonSubTotal>R${total}</QuantityButtonSubTotal>
        </CardItem>
    )
}

export default CartItem;