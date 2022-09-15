import {FC} from 'react'
import {css} from '@emotion/react'
import {useDispatch} from 'react-redux'
import {unwrapResult} from '@reduxjs/toolkit'
import {useHistory} from 'react-router-dom'

// Components
import {Box, Button, InputType, TextInput, TextInputHandler} from '@foo-bar-project/react-ui'

// Utils
import {getStringMinLenRegex, isCapitalLetter, isEmail, isNumber, isSmallLetter, isSpecialSymbol} from 'src/utils'

// Store
import {AppThunkDispatch, requestSignUp} from 'src/store'

const MIN_LEN = 6

/**
 * Sign Up Page 컴포넌트
 * @returns Sign Up Page 컴포넌트
 */
export const SignUp: FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const history = useHistory()
  const [isEnable, setEnable] = useState(false)
  const emailInputRef = useRef<TextInputHandler>()
  const passwordInputRef = useRef<TextInputHandler>()
  const passwordConfirmInputRef = useRef<TextInputHandler>()

  /**
   * 이메일/비밀번호 유효한지 유무
   * @returns 이메일/비밀번호 유효한지 유무
   */
  const isValidInput = () => {
    const {current: emailRef} = emailInputRef
    const {current: passwordRef} = passwordInputRef
    const {current: passwordConfirmInputRefRef} = passwordConfirmInputRef

    return emailRef.isValid() && passwordRef.isValid() && passwordConfirmInputRefRef.isValid()
  }

  /** Email/Passwrod 변경 시 */
  const handleInputChange = useCallback(() => {
    const {current: emailRef} = emailInputRef
    const {current: passwordRef} = passwordInputRef
    const {current: passwordConfirmInputRefRef} = passwordConfirmInputRef

    setEnable(emailRef.hasValue() && passwordRef.hasValue() && passwordConfirmInputRefRef.hasValue())
  }, [])

  /** Sign Up 버튼 클릭*/
  const handleSignUpClick = useCallback(async () => {
    const {current: emailRef} = emailInputRef
    const {current: passwordRef} = passwordInputRef
    const {current: passwordConfirmInputRefRef} = passwordConfirmInputRef

    emailRef.validateTextInput()
    passwordRef.validateTextInput()
    passwordConfirmInputRefRef.validateTextInput()

    if (!isValidInput()) {
      return
    }

    const email = emailRef.getValue()
    const password = passwordRef.getValue()
    const data = unwrapResult(await dispatch(requestSignUp({email, password})))
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
    const {current: passwordRef} = passwordInputRef
    const {current: passwordConfirmInputRefRef} = passwordConfirmInputRef
    const password = passwordRef.getValue()

    return password === passwordConfirmInputRefRef.getValue()
  }, [])

  return (
    <Box styles={ContentCss}>
      {/** Email Input */}
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={emailInputRef}
          styles={InputCss}
          placeholder={'Email'}
          guide={'이메일을 입력하시오.'}
          validator={[isEmail]}
          warnMessage={['올바른 이메일 입력']}
          onChange={handleInputChange}
        />
      </Box>
      {/** Passwrod Input */}
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={passwordInputRef}
          styles={InputCss}
          placeholder={'Password'}
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
      {/** Passwrod Confirm Input */}
      <Box styles={ItemWrapperCss}>
        <TextInput
          ref={passwordConfirmInputRef}
          styles={InputCss}
          placeholder={'Write your password again'}
          type={InputType.Password}
          validator={[validateConfirmPassword]}
          warnMessage={['입력한 패스워드가 일치하지 않습니다.']}
          guide={'확인을 위해 한번더 입력해 주세요'}
          onChange={handleInputChange}
        />
      </Box>
      {/** Sign In Button */}
      <Box styles={ItemWrapperCss}>
        <Button styles={ButtonCss} disabled={!isEnable} onClick={handleSignUpClick}>
          SIGN UP
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

export default SignUp
