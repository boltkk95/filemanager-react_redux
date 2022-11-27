import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {FaArrowLeft,FaFolderPlus} from "react-icons/fa";
import {show} from "../modal/modalSlice";
import { removing} from "./pathSlice"



export const FolderButtons = () => {
    const dispatch = useDispatch()
    const folderPath = useSelector((state) =>state.path.folderPath)
    return (
        <div>
            <button disabled={folderPath==="c"} onClick={() => dispatch(removing())}><FaArrowLeft />back</button>
            <button onClick={() => dispatch(show())}><FaFolderPlus/></button>
            </div>
    )
} 


 