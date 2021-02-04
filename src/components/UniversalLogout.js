import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UniversalLogout = () => {
  const { logout } = useAuth0()
  return <button onClick={() => logout({ returnTo: window.location.origin})}>LOG OUT</button>
}

export default UniversalLogout