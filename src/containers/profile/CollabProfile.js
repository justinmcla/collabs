import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import viewCollab from '../../actions/collabs/collabView/viewCollab'
import readPosts from '../../actions/callboard/readPosts'
import CollabStatusButton from '../../components/collabs/CollabStatusButton'
import SocialIconBar from '../../components/profile/SocialIconBar'
import Post from '../../components/callboard/Post'

const CollabProfile = () => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const userId = window.localStorage.getItem('user')
  const collab = useSelector(state => state.collab.view.profile)
  const posts = useSelector(state => state.callboard.post.list)

  const isUser = collab.user_id === parseInt(userId)

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      await dispatch(viewCollab(token))
      await dispatch(readPosts(token, collab.user_id))
    })()
  }, [dispatch, getAccessTokenSilently, collab.user_id])
  
  const renderStatusButton = () => (
    !isUser ? <CollabStatusButton userId={ collab.user_id } /> : null
  )


  return (
    <div className="w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <div className="flex flex-row items-center">
          <img src={ collab.image_url || '/default_profile_photo.png' } alt={ collab.name } className="border-4 rounded-full shadow-lg w-36"/>
          <div className="flex flex-col ml-6 text-gray-700 dark:text-gray-300 font-body cursor-default">
            <h1 className="text-4xl">{ collab.name }</h1>
            <h2 className="text-2xl">{ collab.profession }</h2>
            <h2 className="text-2xl">{ collab.city }, { collab.state }</h2>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row fill-current">
                <SocialIconBar profile={ collab } />
              </div>
              { renderStatusButton() }
            </div>
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 m-6">
          <h2 className="text-lg">About</h2>
          <p>
            { collab.about }
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

export default CollabProfile