import { createSlice, Dispatch } from '@reduxjs/toolkit'

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
  fetch(process.env.REACT_APP_LOL_CHAMPIONS + '')
    .then(response => response.json())
    .then(payload => {
      const retrievedChampions = Object.values(payload.data)
      dispatch(setChampionsSuccess(retrievedChampions))
    })
    .catch(() => dispatch(setChampionsError()))
}

export default championsSlice.reducer
