import { createSlice, Dispatch } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

export const championsSlice = createSlice({
  name: 'champions',
  initialState: {
    isLoading: false,
    isError: false,
    items: [],
  },
  reducers: {
    setChampionLoading: state => {
      state.isError = false
      state.isLoading = true
    },
    setChampionsSuccess: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.items = action.payload
    },
    setChampionsError: state => {
      state.isError = true
      state.isLoading = false
    },
  },
})

export const {
  setChampionsSuccess,
  setChampionLoading,
  setChampionsError,
} = championsSlice.actions

export const retrieveChampions = (dispatch: Dispatch) => {
  dispatch(setChampionLoading())
  fetch(
    'http://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json',
  )
    .then(response => response.json())
    .then(payload => {
      const retrievedChampions = Object.values(payload.data)
      dispatch(setChampionsSuccess(retrievedChampions))
    })
    .catch(() => dispatch(setChampionsError()))
}

export default championsSlice.reducer
