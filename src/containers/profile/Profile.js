import { useSelector } from 'react-redux'
import Address from '../../components/profile/Address'
import SocialIcon from '../../components/profile/SocialIcon'

const Profile = () => {
  const { name, about, image, location, job, socialLink } = useSelector(state => state.profile)

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <div className="flex flex-row items-center">
          <img src={ image.url } alt={ name.name } className="border-4 rounded-full shadow-lg w-36"/>
          <div className="flex flex-col ml-6 text-gray-700 dark:text-gray-300 font-body cursor-default">
            <h1 className="text-4xl">{ name.name }</h1>
            <h2 className="text-2xl">{ job.title }</h2>
            <h2 className="text-2xl"><Address { ...location.address } /></h2>
            <div className="flex flex-row fill-current">
              { socialLink.list.map(link => <SocialIcon {...link} /> )}
            </div>
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 m-6">
          <h2 className="text-lg">About</h2>
          <p>
            { about.text }
          </p>
        </div>
        <div className="text-gray-700 dark:text-gray-300 m-6">
          <h2 className="text-lg">Portfolios</h2>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile