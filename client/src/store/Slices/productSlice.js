import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state=initialState, action){
         return state
        }
    }
})
export const {addToCart} = slice.actions
export default slice.reducer