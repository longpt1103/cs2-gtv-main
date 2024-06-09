import { useDispatch } from 'react-redux'
import { authActions } from 'components/auth/slices'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'
import Steam from './Steam'
import Avatar from './Avatar'

const UserInfo = () => {
  const dispatch = useDispatch()
  const logout = () => dispatch(authActions.logout())
  return (
    <>
      {/* Steam connect */}
      <Steam />
      {/* User */}
      <Avatar />
      {/* Logout */}
      <button className="btn btn-icon btn-game-red" onClick={logout}>
        <LogoutIcon />
      </button>
    </>
  )
}

export default UserInfo
