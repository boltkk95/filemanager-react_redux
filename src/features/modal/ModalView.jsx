import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {hide} from "./modalSlice";
import { add} from "../folder/folderSlice";
import {handleNameChange} from "../folderName/folderNameSlice"

export const ModalView = () => {
    const modalState = useSelector((state) => state.modal.modalState)
    const dispatch = useDispatch()
    const folderNameState = useSelector((state) => state.folderName.folderNameState)
    const folderPath = useSelector((state) =>state.path.folderPath)
    const structureOfFolder = useSelector((state) => state.folder.structureOfFolder)

    return (
        <div>
          { modalState && 
          <div><form onSubmit={handleSubmit}>
                <textarea placeholder="folder name" value={folderNameState} onChange={(e) => dispatch(handleNameChange(e.target.value))} />
                <input type="submit" value="create" disabled={!folderNameState} onClick={() => dispatch(add(pathDisplay1(folderPath,structureOfFolder,folderNameState)))} />
                </form>
                <button onClick={() => {dispatch(hide())
                                        //dispatch(handleNameChange(""))
                                        }
                                }>cancel</button>
            </div>
            }
        </div>
    )
} 

const handleSubmit = event => {

    event.preventDefault();

    console.log('form submitted ✅');
  };

function positionIndex(base,structure){
    for(let i =0;i<structure.length;i++){
        if(base===structure[i].name)
        { return i
        }
    }
}

 function pathDisplay1(path,structure,folderNameState) {
    var isIncluded = path.includes("/")
    var base,remBase,baseIndex,indexArray=[]


    if (isIncluded===true){
     base = path.slice(0,path.indexOf("/"))
     remBase = path.slice(path.indexOf("/")+1,path.length)
     baseIndex = positionIndex(base,structure)
     indexArray.push(baseIndex)
     let {children, ...r4} = structure[baseIndex]
     let r5 = {...r4,children:pathDisplay1(remBase,structure[baseIndex].children,folderNameState)}
    var newArray1 = structure.filter( (el) => el.name != r5.name)
    var rarray1 = [...newArray1,r5]
        return(rarray1)

    }else{
        base = path
        remBase = "" 
        const c = structure //rectify using c with structure
        baseIndex = positionIndex(base,structure)
        indexArray.push(baseIndex)
        const a = {name:`${folderNameState}`,children:[]}
        const b = structure[baseIndex]
        const modobj = {...b,children: b.children.concat([a])}
        let {children, ...r1} = c[baseIndex]
        let r2 = {...r1,children:modobj.children}
        var newArray = structure.filter( (el) => el.name != r2.name)
        var rarray = [...newArray,r2]
        return rarray
        
    }
}

