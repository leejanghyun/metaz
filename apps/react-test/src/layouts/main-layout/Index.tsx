import {css} from '@emotion/react'
import {PropsWithChildren, ReactElement} from 'react'

// Components
import {Box} from '@foo-bar-project/react-ui'

/**
 * Main Layout Components
 * @param param 컴포넌트 Property
 * @returns Main Layout Components
 */
export const MainLayout: FC = (props) => {
  return <Box styles={WrapperCss}>{props.children}</Box>
}

// Wrapper Css
const WrapperCss = css`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export default MainLayout
