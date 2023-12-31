import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Aumentou a quantidade de ${state.cartItems[itemIndex].name} no carrinho!`, {
                    position: "top-left"
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} no carrinho!`, {
                    position: "top-left"
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} removido do carrinho`, {
                position: "top-left"
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.error(`${action.payload.name} quantidade diminuída`, {
                    position: "top-left"
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.name} removido do carrinho!`, {
                    position: "top-left"
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state) {
            state.cartItems = [];
            toast.error(`Carrinho limpo!`, {
                position: "top-left"
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;