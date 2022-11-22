import './App.css'
import { FolderButtons } from './features/path/FolderButtons';
import {FolderView} from './features/folder/FolderView'
import {ModalView} from './features/modal/ModalView'

function App() {
  return (
    <div className="App">
      <FolderButtons />
      <ModalView/>
      <FolderView/>
    </div>
  );
}

export default App
