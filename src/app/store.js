import { configureStore } from "@reduxjs/toolkit"
import folderReducer from '../features/folder/folderSlice'
import modalReducer from '../features/modal/modalSlice'
import pathReducer from '../features/path/pathSlice'

const store = configureStore({
    reducer: {
        folder: folderReducer,
        modal: modalReducer,
        path: pathReducer,
    }
})

export default store
