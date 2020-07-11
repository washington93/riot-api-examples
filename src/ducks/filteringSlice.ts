import { createSlice, Dispatch } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

export const filteringSlice = createSlice({
  name: 'filtering',
  initialState: {
    nameCriteria: '',
  },
  reducers: {
    setNameCriteria: (state, action) => {
      state.nameCriteria = action.payload
    },
  },
})

export const { setNameCriteria } = filteringSlice.actions

export default filteringSlice.reducer
