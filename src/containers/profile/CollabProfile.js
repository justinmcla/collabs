import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import viewCollab from '../../actions/collabs/viewCollab'

const CollabProfile = () => {
  const { getAccessTokenSilently } = useAuth0()
  const profile = useSelector(state => state.collab.view.collab)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(viewCollab(token))
    })()
    return dispatch({ type: "CLEAR_COLLAB_VIEW" })
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">{ profile.name || ''}</h1>
      </div>
    </div>
  )
}

export default CollabProfile