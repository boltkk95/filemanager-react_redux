import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove} from "./folderSlice";
import { adding, removing} from "../path/pathSlice";




export const FolderView = () => {
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)
    const folderPath = useSelector((state) =>state.path.folderPath)
    const dispatch = useDispatch()
    const folderNameState = useSelector((state) => state.folderName.folderNameState)
    console.log(structureOfFolder)
     return (
            <div><ul>{pathDisplay(folderPath,structureOfFolder,dispatch,folderNameState)}</ul></div>
        
    )
} 

function positionIndex(base,structure){
    for(let i =0;i<structure.length;i++){
        if(base===structure[i].name)
        { return i
        }
    }
}

 function pathDisplay(path,structure,dispatch,folderNameState) {
    var isIncluded = path.includes("/")
    var base,remBase,baseIndex
    //console.log(path)

    if (isIncluded===true){
     base = path.slice(0,path.indexOf("/"))
     remBase = path.slice(path.indexOf("/")+1,path.length)
     baseIndex = positionIndex(base,structure)
     return(pathDisplay(remBase,structure[baseIndex].children))
    // console.log(baseIndex)
    }else{
        base = path
        remBase = "" 
        baseIndex = positionIndex(base,structure)
        //console.log(structure[baseIndex].children.map(bElement => bElement.name))
        const mapArray = (structure[baseIndex].children.map(bElement => bElement.name))  
       return mapArray.map((element,index) => <li onClick={(e) => dispatch(adding(e.target.value))} key={index}>{element}</li>) 
    }
}
