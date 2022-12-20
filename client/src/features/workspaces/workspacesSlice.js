import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    workspaces: [],
    error: ''
}

export const fetchWorkspaces = createAsyncThunk('workspaces/fetchWorkspaces', () => {
    return fetch('/get-workspaces-by-user')
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then(data => {
            return data
        });
})

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchWorkspaces.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWorkspaces.fulfilled, (state, action) => {
            state.loading = false
            state.workspaces = action.payload
            state.error = ''
        })
        builder.addCase(fetchWorkspaces.rejected, (state, action) => {
            state.loading = false
            state.workspaces = []
            state.error = action.error.message
        })
    },
})

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default workspacesSlice.reducer