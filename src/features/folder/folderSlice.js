import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  structureOfFolder: [
    {
      name:"c",
      children:[]
}]}


const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    edit: (state, action) => {
        
        state.structureOfFolder = action.payload
    },
  }
})

export default folderSlice.reducer
export const { edit} = folderSlice.actions
