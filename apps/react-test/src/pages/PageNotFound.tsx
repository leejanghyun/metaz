import {FC} from 'react'
import {css} from '@emotion/react'
import {useHistory} from 'react-router-dom'

// Components
import {Box, Button, Color, Typography} from '@foo-bar-project/react-ui'

/**
 * Page Not Found 컴포넌트
 * @returns Page Not Found 컴포넌트
 */
export const PageNotFound: FC = () => {
  const history = useHistory()

  /**
   * Home 이동 버튼 클릭
   */
  const handleHomeClick = useCallback(async () => {
    history.push('/')
  }, [])

  return (
    <Box styles={ContentCss}>
      <Box styles={ItemWrapperCss}>
        <Typography styles={TextCss}>접근 할 수 없는 페이지 입니다.</Typography>
      </Box>
      {/** Go Home Button */}
      <Box styles={ItemWrapperCss}>
        <Button styles={ButtonCss} onClick={handleHomeClick}>
          Go Home
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

// Text Css
const TextCss = css`
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

export default PageNotFound
