import { createSlice } from '@reduxjs/toolkit'

/*Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.*/

// El initial State no es mas que el estado con el que queremos iniciar la constante

export const taskSlice = createSlice({
  name: 'tasks',
  initialState:[],
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default taskSlice.reducer