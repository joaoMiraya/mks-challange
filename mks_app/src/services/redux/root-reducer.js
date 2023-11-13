import { combineReducers } from 'redux';
import cartSlice from './cartSlice';
import appSlice from './appSlice';


const rootReducer = combineReducers({
    cart: cartSlice,
    app: appSlice,
})


export default rootReducer;

