import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  folderPath: "c"
}

const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    adding: (state,action) => {
        state.folderPath += `/${action.payload}`
    },
    removing: (state) => {
        state.folderPath = state.folderPath.slice(0, state.folderPath.lastIndexOf("/"))
    },
  }
})

export default pathSlice.reducer
export const { adding, removing} = pathSlice.actions