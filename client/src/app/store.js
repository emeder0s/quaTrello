import { configureStore } from '@reduxjs/toolkit'
// El store espera los reducers asi que eso es lo que importamos
import tasksReducer from '../features/tasks/taskSlice'

// Dividimos el estado de multiples archivos para manternerlo. 
// El store guarda los diferentes estados de la app
export const store = configureStore({
  reducer:{
    tasks: tasksReducer,
  }
})