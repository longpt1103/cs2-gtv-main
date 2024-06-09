import clsx from 'clsx'
import useAuth from 'components/auth/hooks/useAuth'
import Login from './Login'
import UserInfo from './UserInfo'

const Auth = () => {
  const { isSignIn } = useAuth()
  return (
    <div
      className={clsx(
        'nav-item nav-item-right',
        'd-flex align-items-md-center',
        'flex-column flex-md-row',
      )}
    >
      {isSignIn ? <UserInfo /> : <Login />}
    </div>
  )
}

export default Auth
