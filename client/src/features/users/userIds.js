import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const userIdsSlice = createSlice({
    name: 'userIds',
    initialState,
    reducers: {
        addUserID: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        }
    }
})

export const { addUserID } = userIdsSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userIdsSlice.reducer