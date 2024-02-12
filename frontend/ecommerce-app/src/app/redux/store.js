import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './FilterReducer/Category'
import updateProductRedicer from './UpdateProduct/UpdateProductReducer'
const store = configureStore({
    reducer:{
       Category:categoryReducer,
       UpdateProduct:updateProductRedicer
    }
})

export default store