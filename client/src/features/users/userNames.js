import { createSlice } from '@reduxjs/toolkit'

const initialState = []

function filterArray(array, filtro) {
    console.log(array, filtro)
    const filtered = array.filter(element => element !== filtro)
    return filtered
}

export const userNameSlice = createSlice({
    name: 'userNames',
    initialState,
    reducers: {
        addUserName: (state, action) => {
            state.push(action.payload)
        },
        deleteUserName: (state, action) => {
            console.log(state, action)
            // const nameFound = state.find 
        },
    }
})

export const { addUserName, deleteUserName } = userNameSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userNameSlice.reducer