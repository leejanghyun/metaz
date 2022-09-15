import styled from '@emotion/styled'
import {Loader} from '@foo-bar-project/react-ui'

/** Loading 페이지 Props */
type PropTypes = {
  isSilent?: boolean
}

/**
 * Loading Page
 * @param props Component Property 값
 * @returns component 반환
 */
const Loading = (props) => {
  return (
    <Wrapper>
      {props.isSilent || (
        <>
          Loading...
          <Loader />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export default Loading
