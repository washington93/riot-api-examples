import { configureStore } from '@reduxjs/toolkit'
import { championsSlice } from '../ducks/championsSlice'

const store = configureStore({
  reducer: {
    champions: championsSlice.reducer,
  },
})

export default store
