import { configureStore } from '@reduxjs/toolkit'
// El store espera los reducers asi que eso es lo que importamos
import tasksReducer from '../features/tasks/taskSlice'
import backgroundSlice from '../features/backgrounds/backgroundSlice'
import workspacesSlice from '../features/workspaces/workspacesSlice'
import userIdsReducer from '../features/users/userIds'
import userNameReducer  from '../features/users/userNames'

// El store guarda los diferentes estados de la app
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    boardBackground: backgroundSlice,
    workspaces: workspacesSlice,
    userIds: userIdsReducer,
    userNames: userNameReducer
  }
})