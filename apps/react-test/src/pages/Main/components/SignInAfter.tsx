import {FC} from 'react'
import {css} from '@emotion/react'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// Components
import {Box, Button, Color, Typography} from '@foo-bar-project/react-ui'
import {useSelector} from 'src/hooks'

// Store
import {AppThunkDispatch, clearAccessToken, getEmail} from 'src/store'

export const SignInAfter: FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const email = useSelector(getEmail)

  /**
   * Sign Out 클릭
   */
  const handleSignOutClick = () => {
    dispatch(clearAccessToken())
  }

  return (
    <Box styles={ContentCss}>
      <Box styles={ItemWrapperCss}>
        <Typography styles={EmailCss}>안녕하세요 {email}님</Typography>
      </Box>
      {/** Sign Out Page 이동 버튼 */}
      <NavLink to="/">
        <Box styles={ItemWrapperCss}>
          <Button styles={ButtonCss} onClick={handleSignOutClick}>
            SIGN OUT
          </Button>
        </Box>
      </NavLink>

      {/** Update Password Page 이동 버튼 */}
      <NavLink to="password-update">
        <Box styles={ItemWrapperCss}>
          <Button styles={ButtonCss}>UPDATE PASSWORD</Button>
        </Box>
      </NavLink>
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

// Email Css
const EmailCss = css`
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: lowercase;
  color: ${Color.MonoColor.MONO_BLACK};
  mix-blend-mode: normal;
  flex: none;
  order: 0;
`

// Item Wrapper Css
const ItemWrapperCss = css`
  width: 100%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Button Css
const ButtonCss = css`
  min-height: 48px;
  height: 48px;
  width: 100%;
`

export default SignInAfter
