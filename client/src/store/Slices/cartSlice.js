import { createSlice } from '@reduxjs/toolkit'

const findIndexItem = (state,action) => state.findIndex((cartItem) => (cartItem._id === action.payload._id))
const findIndexNum = (state ,action) => state.findIndex((cartItem) => (cartItem._id === action.payload))
const slice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addToCart(state, action){
            const existingItemIndex = findIndexItem(state,action)
           if(existingItemIndex !== -1) state[existingItemIndex].quantity += 1;
           else{
            console.log(action)
            state.push({...action.payload ,quantity: 1})
        }
        },
        removeFromCart(state,action){
            
        }
        ,
        decreaseQuantity(state,action){
            const existingItemIndex = findIndexNum(state,action)
            state[existingItemIndex].quantity -= 1;
            if (state[existingItemIndex].quantity === 0)
                state.splice(existingItemIndex, 1)
        }
        ,
        increaseQuantity(state,action){
            const existingItemIndex = findIndexNum(state,action)
            state[existingItemIndex].quantity += 1;
        }
    }
})
export const {addToCart,increaseQuantity,decreaseQuantity} = slice.actions
export default slice.reducer