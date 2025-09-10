import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'



export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  
})
//steps:
//create store
//wrap app component under provider
//create slice
//register reducer in store