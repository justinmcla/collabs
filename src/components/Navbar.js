import UniversalLogout from './UniversalLogout'
import ProfilePhoto from './profile/ProfilePhoto'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import readUserProfile from '../actions/profile/readUserProfile'
import authenticateUser from '../actions/authenticateUser'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { name, image_url } = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      await authenticateUser(token)
      dispatch(readUserProfile(token))
    })()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen themed-gradient w-64">
      <NavLink to="/home"><h1 className="font-header font-extrabold text-white text-5xl text-center m-6">collabs</h1></NavLink>
      <ProfilePhoto image={ image_url } name={ name }/>
      <NavLink to="/profile"><h2 className="text-center text-2xl font-body font-bold text-white m-6">{ name }</h2></NavLink>
      <div className="flex flex-col items-center justify-center">
        <NavLink to="/collabs" className="text-white hover:text-thPurple transform duration-300 ease-in-out">My Collabs</NavLink>
        <NavLink to="/collabs/search" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Find Collabs</NavLink>
        <NavLink to="/collabs/requests" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Pending Collabs</NavLink>
        <NavLink to="/callboard" className="text-white hover:text-thPurple transform duration-300 ease-in-out">View Callboard</NavLink>
        <NavLink to="/portfolios" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Browse Portfolios</NavLink>
        <NavLink to="/settings" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Edit Public Profile</NavLink>
        <UniversalLogout />
      </div>
    </div>
  )
}

export default Navbar