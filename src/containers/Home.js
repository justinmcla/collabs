import React from 'react'
import Navbar from '../components/profile/Navbar'

import { useAuth0 } from '@auth0/auth0-react'
const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
        <Navbar />
        <div className="p-8">
          <h2 className="text-2xl text-white font-body">{user.name}</h2>
        </div>
      </div>
    )
  )
}

export default Home