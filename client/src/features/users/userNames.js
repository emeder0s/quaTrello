import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const userNameSlice = createSlice({
    name: 'userNames',
    initialState,
    reducers: {
        addUserName: (state, action) => {
            state.push(action.payload)
        },
        deleteUserName: (state, action) => {
            const nameFound = state.find(name => name === action.payload)
            if(nameFound){
                state.splice(state.indexOf(nameFound), 1)
            }
        },
    }
})

export const { addUserName, deleteUserName } = userNameSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userNameSlice.reducer