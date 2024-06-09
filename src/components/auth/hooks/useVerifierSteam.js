/* Example:
http://localhost:3000/?
openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
&openid.mode=id_res&openid.op_endpoint=https%3A%2F%2Fsteamcommunity.com%2Fopenid%2Flogin
&openid.claimed_id=https%3A%2F%2Fsteamcommunity.com%2Fopenid%2Fid%2F76561199025004051
&openid.identity=https%3A%2F%2Fsteamcommunity.com%2Fopenid%2Fid%2F76561199025004051
&openid.return_to=http%3A%2F%2Flocalhost%3A3000%2Fcahu
&openid.response_nonce=2024-06-07T14%3A06%3A48ZuJ44sIprAQZdBb8SGjTJJGKddIg%3D
&openid.assoc_handle=1234567890
&openid.signed=signed%2Cop_endpoint%2Cclaimed_id%2Cidentity%2Creturn_to%2Cresponse_nonce%2Cassoc_handle
&openid.sig=AQ2jBlHuBoRVQ7nBSoT0OxrnTVc%3D
*/
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useVerifierSteam = () => {
  const location = useLocation()
  const [verifier, setVerifier] = useState({
    claimed_id: '',
    identity: '',
    return_to: '',
    response_nonce: '',
    assoc_handle: '',
    signed: '',
    sig: '',
  })

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const claimed_id = searchParams.get('openid.claimed_id') || ''
    const identity = searchParams.get('openid.identity') || ''
    const return_to = searchParams.get('openid.return_to') || ''
    const response_nonce = searchParams.get('openid.response_nonce') || ''
    const assoc_handle = searchParams.get('openid.assoc_handle') || ''
    const signed = searchParams.get('openid.signed') || ''
    const sig = searchParams.get('openid.sig') || ''
    if (
      claimed_id &&
      identity &&
      return_to &&
      response_nonce &&
      assoc_handle &&
      signed &&
      sig
    ) {
      setVerifier({
        claimed_id,
        identity,
        return_to,
        response_nonce,
        assoc_handle,
        signed,
        sig,
      })
    } else {
      setVerifier({
        claimed_id: '',
        identity: '',
        return_to: '',
        response_nonce: '',
        assoc_handle: '',
        signed: '',
        sig: '',
      })
    }
  }, [location.pathname, location.search])

  return {
    verifier,
  }
}

export default useVerifierSteam
