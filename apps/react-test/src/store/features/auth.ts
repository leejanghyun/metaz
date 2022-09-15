import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// Api
import {
  getSignInConfig,
  getSignUpConfig,
  getUpdatePasswordConfig,
  httpClient,
  SignInRequestFields,
  SignInResponseFields,
  SignUpRequestFields,
  SignUpResponseFields,
  UpdatePasswordRequestFields,
  UpdatePasswordResponseFields,
} from 'src/api'

// Store
import {RootState} from '..'

const name = 'auth'

/** Thunk 공통 응답 값 */
interface CommonResponseResult<T extends object | null, K extends keyof T = keyof T> {
  K?: T[K]
  isError: boolean
}

/** Auth State 값 */
type StateType = {accessToken: string; email: string; name: string}

const initialState: StateType = {accessToken: '', email: '', name: ''}

const reducers = {
  /* Access Token 제거 */
  clearAccessToken: (state: StateType) => {
    state.accessToken = ''
    state.email = ''
    state.name = ''
  },
}

/** Thunk 정의 */
const asyncThunk = {
  /** Sign In 요청 */
  requestSignIn: createAsyncThunk(
    `${name}/requestSignIn`,
    async (params: SignInRequestFields): Promise<CommonResponseResult<SignInResponseFields>> => {
      const response = await httpClient.request<SignInResponseFields>(getSignInConfig(params))
      const isError = response instanceof Error
      const {data} = response

      return {isError, ...data}
    },
  ),

  /** Sign Up 요청 */
  requestSignUp: createAsyncThunk(
    `${name}/requestSignUp`,
    async (params: SignUpRequestFields): Promise<CommonResponseResult<SignUpResponseFields>> => {
      const response = await httpClient.request<SignUpResponseFields>(getSignUpConfig(params))
      const isError = response instanceof Error
      const {data} = response

      return {isError, ...data}
    },
  ),

  /** Password Update 요청 */
  requestUpdatePassword: createAsyncThunk(
    `${name}/requestUpdatePassword`,
    async (params: UpdatePasswordRequestFields): Promise<CommonResponseResult<UpdatePasswordResponseFields>> => {
      const response = await httpClient.request<UpdatePasswordResponseFields>(getUpdatePasswordConfig(params))
      const isError = response instanceof Error
      const {data} = response

      return {isError, ...data}
    },
  ),
}

/* CreateSlice 정의 */
export const authSlice = createSlice({
  extraReducers: (builder) => {
    const {requestSignIn} = asyncThunk

    builder.addCase(requestSignIn.fulfilled, (state, action) => {
      const {isError, ...rest} = action.payload

      if (isError) {
        return
      }

      const {token, email, name} = rest as SignInResponseFields

      state.accessToken = token || ''
      state.email = email || ''
      state.name = name || ''
    })
  },
  initialState,
  name,
  reducers,
})

// Thunk 정의
export const {requestSignIn, requestSignUp, requestUpdatePassword} = asyncThunk

// Action 정의
export const {clearAccessToken} = authSlice.actions

export const getAccessToken = (state: RootState) => state.authSlice.accessToken
export const getEmail = (state: RootState) => state.authSlice.email
export const getName = (state: RootState) => state.authSlice.name

export default authSlice.reducer
