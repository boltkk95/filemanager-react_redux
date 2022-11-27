import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove} from "../folder/folderSlice";
import {FaArrowLeft,FaFolderMinus,FaFolderPlus} from "react-icons/fa";
import {show} from "../modal/modalSlice";
import { removing} from "./pathSlice"



export const FolderButtons = () => {
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)
    const dispatch = useDispatch()
    const folderPath = useSelector((state) =>state.path.folderPath)
    return (
        <div>
            <button><FaArrowLeft onClick={() => dispatch(removing())}/>back</button>
            <button onClick={() => dispatch(show())}><FaFolderPlus/></button>
            <button><FaFolderMinus /></button>
            </div>
    )
} 

function positionIndex(base,structure){
    for(let i =0;i<structure.length;i++){
        if(base===structure[i].name)
        { return i
        }
    }
}

 function pathDisplay1(path,structure) {
    var isIncluded = path.includes("/")
    var base,remBase,baseIndex,indexArray=[]

    if (isIncluded===true){
     base = path.slice(0,path.indexOf("/"))
     remBase = path.slice(path.indexOf("/")+1,path.length)
     baseIndex = positionIndex(base,structure)
     return(pathDisplay1(remBase,structure[baseIndex].children))
    }else{
        base = path
        remBase = "" 
        baseIndex = positionIndex(base,structure)
        indexArray.push(baseIndex) 
        
    }
}
