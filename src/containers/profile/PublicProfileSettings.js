import ProfilePhotoForm from '../../components/profile/ProfilePhotoForm'
import EditProfile from './EditProfile'

const PublicProfileSettings = () => {
  return (
    <div className="w-full overflow-auto flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
    <div className="p-8">
      <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">Edit your public profile settings</h1>
        <EditProfile />
        <ProfilePhotoForm />
    </div>
  </div>
  )
}

export default PublicProfileSettings