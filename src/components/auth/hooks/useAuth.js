import { useSelector } from 'react-redux'
import { selectIsSignIn, selectUserInfo } from '../selectors'

const useAuth = () => {
  const isSignIn = useSelector(selectIsSignIn)
  const userInfo = useSelector(selectUserInfo)
  return {
    isSignIn,
    userInfo,
  }
}

export default useAuth
