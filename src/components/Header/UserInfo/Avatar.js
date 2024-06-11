import { memo } from 'react'
import { useSelector } from 'react-redux'
import {
  selectSteamId,
  selectUserInfo,
  selectSteamInfoName,
} from 'components/auth/selectors'
import { ReactComponent as SteamIcon } from 'assets/icons/steam.svg'
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg'

const Avatar = () => {
  const steamId = useSelector(selectSteamId)
  const steamName = useSelector(selectSteamInfoName)
  const userInfo = useSelector(selectUserInfo)
  const avatarUrl = userInfo?.['avatar_url'] || '/assets/images/avatar.png'
  const displayName = userInfo?.['display_name'] || ''

  return (
    <div className="avatar-group d-flex align-items-center">
      <div className="left avatar-wrapper me-2">
        <img alt="avatar" src={avatarUrl} className="avatar" />
      </div>
      <div className="right d-flex flex-column">
        <div className="d-flex align-items-center text-normal fw-bold text-color-contentPrimary">
          <span className="me-2">{displayName}</span>
          <CheckIcon style={{ flex: 'none' }} />
        </div>
        <div className="d-flex align-items-center">
          <SteamIcon className="steam-icon me-2" style={{ flex: 'none' }} />
          <span className="text-color-contentQuaternary user-select-none">
            {steamId ? steamName : '---'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default memo(Avatar)
