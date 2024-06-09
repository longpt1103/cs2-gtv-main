import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsPendingLinkSteamAccount,
  selectIsPendingSteamConfig,
  selectIsPendingVerifier,
  selectSteamId,
} from 'components/auth/selectors'
import { fetchSteamConfig } from 'components/auth/slices/asyncThunk'
import { ReactComponent as SteamIcon } from 'assets/icons/steam.svg'

const SteamBtn = () => {
  const dispatch = useDispatch()
  const steamId = useSelector(selectSteamId)
  const isPending = useSelector(selectIsPendingLinkSteamAccount)
  const isPendingSteamConfig = useSelector(selectIsPendingSteamConfig)
  const isVerifier = useSelector(selectIsPendingVerifier)
  const disabled = isPending || isPendingSteamConfig || isVerifier

  const onConfigSteam = () => {
    if (!disabled) dispatch(fetchSteamConfig())
  }

  if (steamId || steamId === null) return null

  return (
    <button
      className="btn btn-outline-white"
      disabled={disabled}
      onClick={onConfigSteam}
    >
      <SteamIcon />
      <span className="ms-2">Liên kết Steam</span>
    </button>
  )
}

export default memo(SteamBtn)
