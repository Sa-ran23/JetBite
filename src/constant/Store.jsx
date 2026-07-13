import { configureStore } from '@reduxjs/toolkit'
import CardSlice from './CartSlice'

export default configureStore({
  reducer: {
    card:CardSlice
  }
})