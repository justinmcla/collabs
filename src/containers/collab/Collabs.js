import React, { useEffect } from 'react'
import CollabCard from '../../components/collabs/CollabCard'
import { useSelector, useDispatch } from 'react-redux'
import readCollabs from '../../actions/collabs/collabList/readCollabs'
import { useAuth0 } from '@auth0/auth0-react'

const Collabs = () => {
  const collabs = useSelector(state => state.collab.collabList.list) || []
  const user = window.localStorage.getItem('user')
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()
  
  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(readCollabs(token))
    })()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800 overflow-auto">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">View your connected collabs.</h1>
        { collabs.map(collab => {
          if (collab.sender.id === parseInt(user)) {
            return <CollabCard profile={ collab.receiver } key={ collab.id } />
          } else {
            return <CollabCard profile={ collab.sender } key={ collab.id } />
          }
        })
      }
      </div>
    </div>
  )
}

export default Collabs