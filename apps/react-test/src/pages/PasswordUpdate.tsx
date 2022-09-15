import {FC} from 'react'
import {css} from '@emotion/react'
import {useDispatch} from 'react-redux'
import {unwrapResult} from '@reduxjs/toolkit'
import {useHistory} from 'react-router-dom'

// Components
import {Box, Button, InputType, TextInput, TextInputHandler} from '@foo-bar-project/react-ui'

// Utils
import {getStringMinLenRegex, isCapitalLetter, isNumber, isSmallLetter, isSpecialSymbol} from 'src/utils'

// Store
import {AppThunkDispatch, requestUpdatePassword} from 'src/store'

const MIN_LEN = 6

/**
 * Password Update Page 컴포넌트
 * @returns Password Update Page 컴포넌트
 */
export const PasswordUpdate: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch<AppThunkDispatch>()
  const paswrodInputRef = useRef<TextInputHandler>()
  const newPasswordInputRef = useRef<TextInputHandler>()
  const newPasswordConfirmInputRef = useRef<TextInputHandler>()
  const [isEnable, setEnable] = useState(false)

  /**
   * Input 입력값들 유효한지 유무
   * @returns Input 입력값들 유효한지 유무
   */
  const isValidInput = () => {
    const {current: newPasswordRef} = newPasswordInputRef
    const {current: newPasswordConfirmRef} = newPasswordConfirmInputRef

    return newPasswordRef.isValid() && newPasswordConfirmRef.isValid()
  }

  /** Input 변경 시 */
  const handleInputChange = useCallback(() => {
    const {current: password} = paswrodInputRef
    const {current: newPassword} = newPasswordInputRef
    const {current: newPasswordConfirm} = newPasswordConfirmInputRef

    setEnable(password.hasValue() && newPassword.hasValue() && newPasswordConfirm.hasValue())
  }, [])

  /** Update Password 버튼 클릭 */
  const handleUpdatePasswordClick = useCallback(async () => {
    const {current: paswrodRef} = paswrodInputRef
    const {current: newPasswordRef} = newPasswordInputRef
    const {current: newPasswordConfirmRef} = newPasswordConfirmInputRef

    newPasswordRef.validateTextInput()
    newPasswordConfirmRef.validateTextInput()

    if (!isValidInput()) {
      return
    }

    const password = paswrodRef.getValue()
    const newPassword = newPasswordConfirmRef.getValue()
    const data = unwrapResult(await dispatch(requestUpdatePassword({newPassword, password})))
    const {isError} = data

    if (isError) {
      return
    }

    history.push('/')
  }, [])

  /**
   * Password 확인 유효성 함수
   * @returns Password 유효성 검증 유무
   */
  const validateConfirmPassword = useCallback(() => {
    const {current: newPasswordRef} = newPasswordInputRef
    const {current: newPasswordConfirmRef} = newPasswordConfirmInputRef

    return newPasswordRef.getValue() === newPasswordConfirmRef.getValue()
  }, [])

  return (
    <Box styles={ContentCss}>
      {/** Passwrod Input */}
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={paswrodInputRef}
          styles={InputCss}
          placeholder={'Password'}
          type={InputType.Password}
          guide={'기존 패스워드를 입려하시오'}
          onChange={handleInputChange}
        />
      </Box>
      {/** New Passwrod/ New Password Input */}
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={newPasswordInputRef}
          styles={InputCss}
          placeholder={'New Password'}
          type={InputType.Password}
          validator={[isSpecialSymbol, isCapitalLetter, isSmallLetter, isNumber, getStringMinLenRegex(MIN_LEN)]}
          warnMessage={[
            '1개이상의 기호를 포함하여야 합니다.',
            '1개이상의 대문자를 포함하여야 합니다.',
            '1개이상의 소문자를 포함하여야 합니다.',
            '1개이상의 숫자를 포함하여야 합니다.',
            '6글자 이상 이여야 합니다',
          ]}
          guide={'6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를 입력하세요'}
          onChange={handleInputChange}
        />
      </Box>
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={newPasswordConfirmInputRef}
          styles={InputCss}
          placeholder={'New Password'}
          type={InputType.Password}
          validator={[validateConfirmPassword]}
          warnMessage={['입력한 패스워드가 일치하지 않습니다.']}
          guide={'다시한번 패스워드를 입력해주세요'}
          onChange={handleInputChange}
        />
      </Box>
      {/** Updagte Password Button */}
      <Box styles={ItemWrapperCss}>
        <Button styles={ButtonCss} disabled={!isEnable} onClick={handleUpdatePasswordClick}>
          UPDATE PASSWORD
        </Button>
      </Box>
    </Box>
  )
}

// Content Css
const ContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 34px;
`

// Item Wrapper Css
const ItemWrapperCss = css`
  width: 100%;
  margin: 5px;
`

// Input Css
const InputCss = css`
  width: 100%;
`

// Button Css
const ButtonCss = css`
  min-height: 48px;
  height: 48px;
  width: 100%;
`

export default PasswordUpdate
