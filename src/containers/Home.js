import React from 'react'
import UniversalLogout from '../components/UniversalLogout'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <UniversalLogout />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}

export default Home