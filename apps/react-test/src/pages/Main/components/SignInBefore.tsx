import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {Box, Button} from '@foo-bar-project/react-ui'
import {css} from '@emotion/react'

export const SignInBefore: FC = () => {
  return (
    <Box styles={ContentCss}>
      {/** Sign In Page 이동 버튼 */}
      <NavLink to="signin">
        <Box styles={ItemWrapperCss}>
          <Button styles={ButtonCss}>SIGN IN</Button>
        </Box>
      </NavLink>

      {/** Sign Up Page 이동 버튼 */}
      <NavLink to="signup">
        <Box styles={ItemWrapperCss}>
          <Button styles={ButtonCss}>SIGN UP</Button>
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

// Item Wrapper Css
const ItemWrapperCss = css`
  width: 100%;
  margin: 5px;
`

// Button Css
const ButtonCss = css`
  min-height: 48px;
  height: 48px;
  width: 100%;
`

export default SignInBefore
