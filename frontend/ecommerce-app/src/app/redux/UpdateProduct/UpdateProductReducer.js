import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product:null
}


const productslice = createSlice({
    name:'updateproduct',
    initialState,
    reducers:{
        setproduct:(state,action)=>{
            state.product = action.payload
        }
    }
})

export const {setproduct} = productslice.actions
export default productslice.reducer