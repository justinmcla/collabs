import React from 'react'
import { Link } from 'react-router-dom'
import CollabStatusButton from './CollabStatusButton'

const CollabCard = ({ profile, type }) => {
  return (
  <Link to={`/profile${profile.url}`}>
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md m-6 flex flex-col flex-nowrap p-4 w-auto items-center transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer">
      <div className="flex flex-row self-start">
        <img src={ profile.image || '/default_profile_photo.png' } alt={ profile.name } className="w-16 border-2 border-white rounded-full mr-2 shadow-lg" />
        <div className="dark:text-white">
          <h1 className="font-bold text-thPurple dark:text-thMagenta">{ profile.name }</h1>
          <h2>{ profile.profession }</h2>
          <h2>{ `${profile.location.city}, ${profile.location.state}` }</h2>
        </div>
      </div>
      <CollabStatusButton user={ profile.uuid } type={ type }/>
    </div>
  </Link>
  )
}

export default CollabCard