import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit} from "./folderSlice";
import { adding} from "../path/pathSlice";
import {FaFolderMinus} from "react-icons/fa";



export const FolderView = () => {
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)
    const folderPath = useSelector((state) =>state.path.folderPath)
    const dispatch = useDispatch()
    const folderNameState = useSelector((state) => state.folderName.folderNameState)

    function pathDisplay(path,structure) {
        var isIncluded = path.includes("/")
        var base,remBase,baseIndex
    
        if (isIncluded===true){
         base = path.slice(0,path.indexOf("/"))
         remBase = path.slice(path.indexOf("/")+1,path.length)
         baseIndex = positionIndex(base,structure)
         return(pathDisplay(remBase,structure[baseIndex].children))
        }else{
            base = path
            remBase = "" 
            baseIndex = positionIndex(base,structure)
            const mapArray = (structure[baseIndex].children.map(bElement => bElement.name))  
           return mapArray.map((element,index) => <li key={index}><span onClick={() => dispatch(adding(element))}>{element}</span><button onClick={() => dispatch(edit(pathDisplay1(folderPath,structureOfFolder,element)))}><FaFolderMinus /></button></li>) 
        }
    }
    
     return (
            <div><ul>{pathDisplay(folderPath,structureOfFolder)}</ul></div>
        
    )
} 

function positionIndex(base,structure){
    for(let i =0;i<structure.length;i++){
        if(base===structure[i].name)
        { return i
        }
    }
}

function pathDisplay1(path,structure,element) {
    var isIncluded = path.includes("/")
    var base,remBase,baseIndex


    if (isIncluded===true){
     base = path.slice(0,path.indexOf("/"))
     remBase = path.slice(path.indexOf("/")+1,path.length)
     baseIndex = positionIndex(base,structure)
     let {children, ...r4} = structure[baseIndex]
     let r5 = {...r4,children:pathDisplay1(remBase,structure[baseIndex].children,element)}
    var newArray1 = structure.filter( (el) => el.name !== r5.name)
    var rarray1 = [...newArray1,r5]
        return(rarray1)     

    }else{
        base = path
        remBase = "" 
        baseIndex = positionIndex(base,structure)
        var newArray = structure[baseIndex].children.filter( (el) => el.name !==element)
        const modobj = {...structure[baseIndex],children: newArray}
        var newArray11 = structure.filter( (el) => el.name !== modobj.name)
        var rarray = [...newArray11,modobj]
        return rarray
        
    }
}