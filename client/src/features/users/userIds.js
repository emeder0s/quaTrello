import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const userIdsSlice = createSlice({
    name: 'userIds',
    initialState,
    reducers: {
        addUserID: (state, action) => {
            state.push(action.payload)
        },
        deleteUserID: (state, action) => {
            const idFound = state.find(id => id == action.payload)
            if (idFound) {
                state.splice(state.indexOf(idFound), 1)
            }
        },
    }
})

export const { addUserID, deleteUserID } = userIdsSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userIdsSlice.reducer