import createRequest from '../../actions/collabs/collabRequests/createRequest'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useCallback, useEffect } from 'react'
import deleteRequest from '../../actions/collabs/collabRequests/deleteRequest'
import confirmRequest from '../../actions/collabs/collabRequests/confirmRequest'

const CollabStatusButton = ({ userId }) => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const collabs = useSelector(state => state.collab.collabList.list)
  const requests = useSelector(state => state.collab.collabRequest.list)
  const [status, setStatus] = useState({})

  useEffect(() => {
    const isCollab = collabs.some(collab => collab.sender.user_id === userId || collab.receiver.user_id === userId)
    const isPending = requests.some(collab => collab.sender.user_id === userId || collab.receiver.user_id === userId)
    const isSender = [...collabs, ...requests].some(collab => collab.receiver.user_id === userId)
    setStatus({
      isCollab: isCollab,
      isPending: isPending,
      isSender: isSender
    })
    }, [collabs, requests, userId]
  )

  const handleAddClick = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      dispatch(createRequest(token, userId))
      setStatus({...status, isPending: true, isSender: true })
    }, [dispatch, getAccessTokenSilently, userId, status]
  )

  const handleConfirmClick = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      const collaborationId = [...collabs, ...requests].find(collaboration => collaboration.sender.user_id === userId || collaboration.receiver.user_id === userId).id
      dispatch(confirmRequest(token, collaborationId))
      setStatus({ ...status, isPending: false, isCollab: true })
    }, [dispatch, getAccessTokenSilently, userId, collabs, requests, status]
  )

  const handleDeleteClick = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      const collaborationId = [...collabs, ...requests].find(collaboration => collaboration.sender.user_id === userId || collaboration.receiver.user_id === userId).id
      dispatch(deleteRequest(token, collaborationId))
      setStatus({ ...status, isPending: false, isCollab: false })
    }, [dispatch, getAccessTokenSilently, userId, collabs, requests, status]
  )

  const createAddButton = () => {
    return (
      <button 
        className="bg-green-300 rounded-md p-1 w-20 transform ease-in-out duration-300 hover:bg-green-400"
        onClick={handleAddClick}
        >Add</button>
    )
  }

  const createCancelButton = () => {
    return (
      <button
        className="bg-yellow-200 rounded-md p-1 w-20 transform ease-in-out duration-300 hover:bg-yellow-300"
        onClick={handleDeleteClick}
        >Cancel</button>
    )
  }

  const createConfirmDeleteButton = () => {
    return (
      <>
        <button
          className="bg-blue-200 rounded-md p-1 w-20 transform ease-in-out duration-300 hover:bg-blue-300"
          onClick={handleConfirmClick}
          >Confirm</button>
        <button
          className="bg-red-300 rounded-md p-1 w-20 transform ease-in-out duration-300 hover:bg-red-400"
          onClick={handleDeleteClick}
          >Delete</button>
      </>
    )
  }

  const createDeleteButton = () => {
    return (
      <button
        className="bg-red-300 rounded-md p-1 w-20 transform ease-in-out duration-300 hover:bg-red-400"
        onClick={handleDeleteClick}
        >Delete</button>
    )
  }

  const collabStatus = () => {
    if (!status.isPending && !status.isCollab) {
      return createAddButton()
    } else if (!status.isPending && status.isCollab) {
      return createDeleteButton()
    } else if (status.isPending && status.isSender) {
      return createCancelButton()
    } else {
      return createConfirmDeleteButton()
    }
  }

  return (
    <div className="self-end">
      <span>{ collabStatus() }</span>
    </div>
  )
}

export default CollabStatusButton