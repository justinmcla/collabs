import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import QuickAccessCard from '../components/profile/QuickAccessCard'

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="h-screen flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800 w-full">
        <div className="p-8">
          <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">What would you like to do?</h1>
          <QuickAccessCard 
            title="FIND COLLABS" 
            link="/collabs/search" 
            content="Find potential collaborators for your creative projects. 
            Browse by name, location, or artistic discipline." 
          />
          <QuickAccessCard 
            title="VIEW CALLBOARD" 
            link="/callboard" 
            content="Your own personal callboard, curated for your interests and artistic needs. 
            Read posts by creatives, and send out posts to be pinned on callboards of potential collabs." 
          />
          <QuickAccessCard 
            title="BROWSE PORTFOLIOS" 
            link="/portfolios" 
            content="Freely browse portfolios of creatives. Get inspiration, strike up a conversation. 
            Expand your creative network." 
          />
        </div>
      </div>
    )
  )
}

export default Home