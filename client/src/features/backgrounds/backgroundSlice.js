import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    backgrounds: [],
    error: ''
}

export const fetchBackgrounds = createAsyncThunk('background/fetchBackgrounds', () => {
    return fetch(`https://api.unsplash.com/photos/random?client_id=JMjfYjVegEZWmnba38YxaDVZaPQx4fH75Dnxq3mUN1E&count=4`)
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

const backgroundSlice = createSlice({
    name: 'backgrounds',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBackgrounds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBackgrounds.fulfilled, (state, action) => {
            state.loading = false
            state.backgrounds = action.payload
            state.error = ''
        })
        builder.addCase(fetchBackgrounds.rejected, (state, action) => {
            state.loading = false
            state.backgrounds = []
            state.error = action.error.message
        })
    },
})

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default backgroundSlice.reducer