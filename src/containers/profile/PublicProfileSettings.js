import { useSelector } from 'react-redux'
import ProfileProperty from './ProfileProperty'

const PublicProfileSettings = () => {
  const { name, url, location, job, socialLink } = useSelector(state => state.profile)
  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">Edit your public profile settings</h1>
        <table className="m-4 text-gray-700 dark:text-gray-300">
          <ProfileProperty column="Name" value={ name.name } />
          <ProfileProperty column="Profession" value={ job.title } />
          <ProfileProperty column="Location" value={ `${location.address.city}, ${location.address.state} ${location.address.zip}` } />
          <ProfileProperty column="Public URL" value={ url.path } />
          <tr><td colspan="2"><br />Social Links</td></tr>
          { socialLink.list.map( link => <ProfileProperty column={ link.provider } value={ link.handle } />)}
        </table>
      </div>
    </div>
  )
}

export default PublicProfileSettings