import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../../../data.js'

const slice = createSlice({
    name: 'product',
    initialState: data,
    reducers: {
        products(state=initialState, action){
         return state
        }
    }
})
export const {products} = slice.actions
export default slice.reducer