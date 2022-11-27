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
            },
            {
              name:"hd",
              children:[]
            }
                                
          ]
        },
        {
          name:"new",
          children:[]
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

    remove: (state, action) => {

    },
    add: (state, action) => {
        
        state.stuctureOfFolder = action.payload
    },
  }
})

export default folderSlice.reducer
export const { add,remove} = folderSlice.actions
