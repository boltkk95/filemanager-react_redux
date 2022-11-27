import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  folderNameState: ""
}

const folderNameSlice = createSlice({
  name: 'folderName',
  initialState,
  reducers: {
    handleNameChange: (state,action) => {
        state.folderNameState = `${action.payload}`
    },
  }
})

export default folderNameSlice.reducer
export const { handleNameChange } = folderNameSlice.actions
