import { configureStore } from "@reduxjs/toolkit"
import folderReducer from '../features/folder/folderSlice'
import modalReducer from '../features/modal/modalSlice'
import pathReducer from '../features/path/pathSlice'
import folderNameReducer from "../features/folderName/folderNameSlice"

const store = configureStore({
    reducer: {
        folder: folderReducer,
        modal: modalReducer,
        path: pathReducer,
        folderName: folderNameReducer,
    }
})

export default store
