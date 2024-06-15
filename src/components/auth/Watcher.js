import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useAuth from 'components/auth/hooks/useAuth'
import useAuthorizeCode from 'components/auth/hooks/useAuthorizeCode'
import useVerifierSteam from 'components/auth/hooks/useVerifierSteam'
import {
  fetchUserInfo,
  fetchLinkSteamAccount,
  postVerifierSteam,
} from 'components/auth/slices/asyncThunk'
import { fetchAllServerList } from 'components/steam/slices/asyncThunk'
import { isIncludeGameModeParam } from 'utils/route'
import { clearAuthorizeQueryString, clearQueryString } from 'utils/auth'
import { isReFreshCountData, getModeFromPathName } from 'utils/steam'

const Watcher = () => {
  const dispatch = useDispatch()
  const { isSignIn, userInfo } = useAuth()
  const { authorizeCode } = useAuthorizeCode()
  const { verifier } = useVerifierSteam()

  useEffect(() => {
    if (authorizeCode) {
      dispatch(fetchUserInfo(authorizeCode))
      // clear query string
      clearAuthorizeQueryString()
    }
  }, [authorizeCode])

  useEffect(() => {
    if (isSignIn && userInfo) {
      dispatch(fetchLinkSteamAccount())
    }
  }, [isSignIn, userInfo])

  useEffect(() => {
    if (
      verifier.assoc_handle &&
      verifier.claimed_id &&
      verifier.identity &&
      verifier.response_nonce &&
      verifier.return_to &&
      verifier.sig &&
      verifier.signed
    ) {
      dispatch(
        postVerifierSteam({
          openid_assoc_handle: verifier.assoc_handle,
          openid_signed: verifier.signed,
          openid_sig: verifier.sig,
          openid_claimed_id: verifier.claimed_id,
          openid_identity: verifier.identity,
          openid_return_to: verifier.return_to,
          openid_response_nonce: verifier.response_nonce,
        }),
      )
      // clear query string
      clearQueryString()
    }
  }, [verifier])

  useEffect(() => {
    const mode = getModeFromPathName()
    if (isIncludeGameModeParam(mode)) {
      /**
       * prevent load from detail route
       * return here if you want stop loaded
       */
    }
    if (isReFreshCountData()) {
      dispatch(fetchAllServerList())
    }
  }, [])

  return null
}

export default Watcher
