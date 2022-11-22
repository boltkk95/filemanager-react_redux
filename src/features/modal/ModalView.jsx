import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {hide} from "./modalSlice";
import { add} from "../folder/folderSlice";

export const ModalView = () => {
    const modalState = useSelector((state) => state.modal.modalState)
    const dispatch = useDispatch()
    const [folderName, setFolderName] = React.useState("")

    function handleNameChange(event) {
        setFolderName(event.target.value)
    }

    return (
        <div>
          { modalState && 
          <div><form>
                <textarea placeholder="folder name" value={folderName} onChange={handleNameChange} />
                <input type="submit" value="create" disabled={!folderName} onClick={() => dispatch(add(folderName))} />
                {console.log(folderName)}
                </form>
                <button onClick={() => {dispatch(hide())
                                        setFolderName("")
                                        }
                                }>cancel</button>
            </div>
            }
        </div>
    )
} 
