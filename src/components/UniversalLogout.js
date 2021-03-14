import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UniversalLogout = () => {
  const { logout } = useAuth0()
  return <button className="text-white hover:text-thIndigo transform duration-300 ease-in-out" onClick={() => logout({ returnTo: window.location.origin})}>Log Out</button>
}

export default UniversalLogout