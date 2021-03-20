import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Post from '../components/callboard/Post'
import queryPosts from '../actions/callboard/queryPosts'
import PostSearchForm from '../containers/callboard/PostSearchForm'
import NewPostForm from '../containers/callboard/NewPostForm'

const Callboard = () => {
  const posts = useSelector(state => state.callboard.search.results)
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(queryPosts(token))
    })()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800 overflow-auto">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic">View posts on your callboard.</h1>
        <br />
        <NewPostForm />
        <br />
        <PostSearchForm />
        <div className="flex flex-wrap">
          { posts.map(post => <Post post={ post } key={ post.id }/>) }
        </div>
      </div>
    </div>
  )
}

export default Callboard