// Hooks
import {Loader} from '@foo-bar-project/react-ui'
import {useSelector} from 'src/hooks/'

// Store
import {isShowSpinner} from 'src/store/'

// Component

/**
 * Spinner Component
 * @returns Spinner Component
 */
const Spinner = () => {
  const isShow = useSelector(isShowSpinner)

  return <>{isShow && <Loader />}</>
}

export default Spinner
