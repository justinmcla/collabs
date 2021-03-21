import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import readPosts from '../../actions/callboard/readPosts'
import Post from '../../components/callboard/Post'
import SocialIconBar from '../../components/profile/SocialIconBar'

const Profile = () => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.data)
  const posts = useSelector(state => state.callboard.post.list)

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(readPosts(token, profile.user_id))
    })()
  }, [dispatch, getAccessTokenSilently, profile.user_id])

  return (
    <div className="w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <div className="flex flex-row items-center">
          <img src={ profile.image_url } alt={ profile.name } className="border-4 rounded-full shadow-lg w-36"/>
          <div className="flex flex-col ml-6 text-gray-700 dark:text-gray-300 font-body cursor-default">
            <h1 className="text-4xl">{ profile.name }</h1>
            <h2 className="text-2xl">{ profile.profession }</h2>
            <h2 className="text-2xl">{ profile.city }, { profile.state }</h2>
            <div className="flex flex-row fill-current">
              <SocialIconBar profile={ profile }/>
            </div>
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 m-6">
          <h2 className="text-lg">About</h2>
          <p>
            { profile.about }
          </p>
        </div>
        <div className="text-gray-700 dark:text-gray-300 m-6">
          <h2 className="text-lg">Posts</h2>
          <div>
            { posts.map(post => <Post post={ post } key={ post.id } />) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile