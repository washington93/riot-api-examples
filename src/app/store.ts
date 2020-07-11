import { configureStore } from '@reduxjs/toolkit'
import { championsSlice } from '../ducks/championsSlice'
import { filteringSlice } from '../ducks/filteringSlice'

const store = configureStore({
  reducer: {
    champions: championsSlice.reducer,
    filtering: filteringSlice.reducer,
  },
})

export default store
