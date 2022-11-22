import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  structureOfFolder: [
    {
      name:"c",
      children:[
        {
          name:"me",
          children:[
            {
              name:"you",
              children:[]
            }
                                
          ]
        }
      ]
    }
  ]
}

/*{name:"c",
                      children:[{name:"me",
                                children:[{}]}]}*/

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    open: state => {
      
    },
    backward: state => {

    },
    remove: (state, action) => {

    },
    add: (state, action) => {
        state.stuctureOfFolder = [...state.stuctureOfFolder,]
    },
  }
})

export default folderSlice.reducer
export const { open, add, backward, remove} = folderSlice.actions
