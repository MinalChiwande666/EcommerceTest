import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    category:null
}

const categoryslice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setcategory:(state,action)=>{
            state.category = action.payload
        }
    }
})

export const {setcategory} = categoryslice.actions
export default categoryslice.reducer