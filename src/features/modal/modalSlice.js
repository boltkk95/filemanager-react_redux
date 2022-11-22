import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  modalState: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
        state.modalState = true
    },
    hide: (state) => {
        state.modalState = false
    }
  }
})

export default modalSlice.reducer
export const { show, hide} = modalSlice.actions
