import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UniversalLogin = () => {
  const { loginWithRedirect } = useAuth0()
  return <button onClick={() => loginWithRedirect()}>UNIVERSAL LOGIN</button>
}

export default UniversalLogin