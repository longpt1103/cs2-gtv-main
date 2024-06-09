import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

const useAuthorizeCode = () => {
  const location = useLocation()
  const [authorizeCode, setAuthorizeCode] = useState('')

  const clearAuthorizeCode = useCallback(() => {
    setAuthorizeCode('')
  }, [])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const hasAuthorizeQuery = searchParams.has('authorize_code')
    if (hasAuthorizeQuery) {
      const code = searchParams.get('authorize_code') || ''
      setAuthorizeCode(code)
    } else {
      setAuthorizeCode('')
    }
  }, [location.pathname, location.search])

  return {
    authorizeCode,
    clearAuthorizeCode,
  }
}

export default useAuthorizeCode
