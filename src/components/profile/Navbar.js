import UniversalLogout from '../UniversalLogout'
import ProfilePhoto from './ProfilePhoto'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { user } = useAuth0()

  return (
    <div className="h-screen themed-gradient w-64">
      <a href="/home"><h1 className="font-header font-extrabold text-white text-5xl text-center m-6">collabs</h1></a>
      <ProfilePhoto image="../lucie.png" name=""/>
      <h2 className="text-center text-2xl font-body font-bold text-white m-6">{ user.name }</h2>
      <UniversalLogout />
    </div>
  )
}

export default Navbar