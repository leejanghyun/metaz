import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Api
import {httpClient} from 'src/api/AxiosApi'

// Store
import {RootState} from '..'

// Store

// Api

/** Spinner 보여주기/숨김 */
interface ShowSpinnerActionPayload {
  isShowSpinner: boolean
}

/** 상태 타입 */
type StateType = {
  isShowSpinner: boolean
  toastMessages: string[]
}

const name = 'global'

const initialState: StateType = {
  isShowSpinner: false,
  toastMessages: [],
}

/** Alert 보여주기/숨김 */
type AddToast = string

/** Reducer 정의 */
const reducers = {
  /**
   * 모든 API request 취소
   */
  abortAllPending: () => {
    httpClient.removeAllPending()
  },

  /** Toast 숨기기 */
  hideToast: (state: StateType) => {
    const {toastMessages} = state

    state.toastMessages = toastMessages.slice(0, -1)
  },

  /**
   * spinner 보여 주기
   */
  showSpinner: (state: StateType, action: PayloadAction<ShowSpinnerActionPayload>) => {
    const {isShowSpinner} = action.payload

    state.isShowSpinner = isShowSpinner
  },
  /** Toast 보여 주기 */
  showToast: (state: StateType, action: PayloadAction<AddToast>) => {
    const {toastMessages} = state
    const {length} = toastMessages
    const MAX_LEN = 3

    if (length >= MAX_LEN) {
      return
    }

    state.toastMessages = [action.payload, ...toastMessages]
  },
}

/* CreateSlice 정의 */
export const globalSlice = createSlice({
  initialState,
  name,
  reducers,
})

// Selector 정의
export const isShowSpinner = (state: RootState) => state.global.isShowSpinner
export const getToastMessages = (state: RootState) => state.global.toastMessages

// Action 정의
export const {showSpinner, abortAllPending, showToast, hideToast} = globalSlice.actions

export default globalSlice.reducer
