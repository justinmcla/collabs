import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import readRequests from '../../actions/collabs/collabRequests/readRequests'
import CollabCard from '../../components/collabs/CollabCard'

const CollabRequests = () => {
  const requests = useSelector(state => state.collab.collabRequest.list)
  const user = window.localStorage.getItem('user')
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(readRequests(token))
    })()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800 overflow-auto">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">View your pending requests.</h1>
        { requests.map(request => {
            if (request.sender.id === parseInt(user)) {
              return <CollabCard profile={ request.receiver } key={ request.id }/>
            } else {
              return <CollabCard profile={ request.sender } key={ request.id }/>
            }
          }) 
        }
      </div>
    </div>
  )
}

export default CollabRequests