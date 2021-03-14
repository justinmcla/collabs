import UniversalLogout from './UniversalLogout'
import ProfilePhoto from './profile/ProfilePhoto'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const profilePhoto = useSelector(state => state.profile.image.url)
  const name = useSelector(state => state.profile.name.name)

  return (
    <div className="h-screen themed-gradient w-64">
      <NavLink to="/home"><h1 className="font-header font-extrabold text-white text-5xl text-center m-6">collabs</h1></NavLink>
      <ProfilePhoto image={ profilePhoto } name={ name }/>
      <h2 className="text-center text-2xl font-body font-bold text-white m-6">{ name }</h2>
      <div className="flex flex-col items-center justify-center">
        <NavLink to="/collabs" className="text-white hover:text-thPurple transform duration-300 ease-in-out">My Collabs</NavLink>
        <NavLink to="/callboard" className="text-white hover:text-thPurple transform duration-300 ease-in-out">View Callboard</NavLink>
        <NavLink to="/portfolios" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Browse Portfolios</NavLink>
        <NavLink to="/settings" className="text-white hover:text-thPurple transform duration-300 ease-in-out">Account Settings</NavLink>
        <UniversalLogout />
      </div>
    </div>
  )
}

export default Navbar