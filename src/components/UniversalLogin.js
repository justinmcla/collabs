import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UniversalLogin = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button 
      className="p-2 border-4 themed-gradient text-white focus:outline-none transform focus:translate-y-0.5 border-white w-max whitespace-nowrap font-body font-bold hover:animated-gradient shadow-lg"
      onClick={() => loginWithRedirect()}>
      UNIVERSAL LOGIN
    </button>
  )
}

export default UniversalLogin