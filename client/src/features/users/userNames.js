import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const userNameSlice = createSlice({
    name: 'userNames',
    initialState,
    reducers: {
        addUserName: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        }
    }
})

export const { addUserName } = userNameSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default userNameSlice.reducer