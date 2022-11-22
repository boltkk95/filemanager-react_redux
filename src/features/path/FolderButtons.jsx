import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {open, add, backward, remove} from "../folder/folderSlice";
import {FaArrowLeft,FaFolderMinus,FaFolderPlus} from "react-icons/fa";
import {show} from "../modal/modalSlice";

export const FolderButtons = () => {
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)
    const dispatch = useDispatch()
    return (
        <div>
            <button><FaArrowLeft/>back</button>
            <button onClick={() => dispatch(show())}><FaFolderPlus/></button>
            <button><FaFolderMinus/></button>
            </div>
    )
} 
