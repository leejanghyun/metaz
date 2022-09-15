import {memo} from 'react'
import {useDispatch} from 'react-redux'

// Components
import {Box, Toast} from '@foo-bar-project/react-ui'

// Hooks
import useSelectorHook from 'src/hooks/useSelector'

// Store
import {AppThunkDispatch, getToastMessages, hideToast} from 'src/store/'

/**
 * 에러 알림 컴포넌트
 * @returns 에러 알림 컴포넌트
 */
const ErrorAlert = () => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const messages = useSelectorHook(getToastMessages)

  /**
   * Timeout 발생
   */
  const handleTimeout = () => {
    dispatch(hideToast())
  }

  /**
   * Toast Message Component 반환
   * @returns Toast Message Component 반환
   */
  const getToasts = () => {
    return messages.map((message: string, idx: number) => {
      return <Toast key={`${idx}`} isShow={true} message={message} onTimeout={handleTimeout} />
    })
  }

  return <Box>{getToasts()}</Box>
}

export default memo(ErrorAlert)
