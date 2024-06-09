import { memo } from 'react'
import { simulate } from 'utils/auth'

const Login = () => {
  return (
    <>
      <button className="btn btn-game-red text-uppercase" onClick={simulate}>
        Đăng ký tài khoản
      </button>
      <button
        className="btn btn-outline-white text-uppercase"
        onClick={simulate}
      >
        Đăng nhập Gplay
      </button>
    </>
  )
}

export default memo(Login)
