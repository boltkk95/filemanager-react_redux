import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {open, add, backward, remove} from "./folderSlice";

function positionIndex(base,structure){
    for(let i =0;i<structure.length;i++){
        if(base===structure[i].name)
        { return i
        }
    }
}

 function pathDisplay(path,structure) {
    var isIncluded = path.includes("/")
    var base,remBase,baseIndex
    //console.log(path)

    if (isIncluded===true){
     base = path.slice(0,path.indexOf("/"))
     remBase = path.slice(path.indexOf("/")+1,path.length)
     baseIndex = positionIndex(base,structure)
     pathDisplay(remBase,structure[baseIndex].children)
    // console.log(baseIndex)
    }else{
        base = path
        remBase = "" 
        baseIndex = positionIndex(base,structure)
        console.log(structure[baseIndex].children.map(bElement => bElement.name))
        return(structure[baseIndex].children.map(bElement => bElement.name))   
    }


    
}


export const FolderView = () => {
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)
    const folderPath = useSelector((state) =>state.path.folderPath)
    const dispatch = useDispatch()
    console.log(folderPath)
    //console.log(structureOfFolder)

     pathDisplay(folderPath,structureOfFolder)
     console.log(pathDisplay(folderPath,structureOfFolder))

    
    return (
        <div>
           
        </div>
    )
} 
