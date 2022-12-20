import { createSlice } from '@reduxjs/toolkit'

const initialState = []

function filterArray(array, filtro) {
    const filtered = array.filter(element => element !== filtro)
    return filtered
}

export const userIdsSlice = createSlice({
    name: 'userIds',
    initialState,
    reducers: {
        addUserID: (state, action) => {
            state.push(action.payload)
        },
        deleteUserID: (state, action) => {
            console.log(state, action)
            state = filterArray(state, action.payload)
        },
    }
})

export const { addUserID, deleteUserID } = userIdsSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userIdsSlice.reducer