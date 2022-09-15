import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from 'react-redux'

// Features
import authSlice from 'src/store/features/auth'
import global from 'store/features/global'

// Store
const reducer = combineReducers({authSlice, global})
const middleware = [...getDefaultMiddleware(), thunkMiddleware] // middleware

// store 객체
const store = configureStore({
  middleware,
  reducer,
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type ReducerType = ReturnType<typeof reducer>
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

export * from 'src/store/features/auth'
export * from 'store/features/global'

export default store
