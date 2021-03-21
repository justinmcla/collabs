import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import queryCollabs from '../../actions/collabs/collabSearch/queryCollabs'

const CollabSearchForm = () => {
  const [value, setValue] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      dispatch(queryCollabs(token, value))
    }, [dispatch, getAccessTokenSilently, value]
  )

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} className="bg-gray-200 dark:bg-gray-800 p-1 border-thMagenta border-b-2 outline-none dark:text-white"/>
        <input type="submit" value="Search" className="m-2 p-1 border-thMagenta bg-transparent border-2 text-thMagenta"/>
      </form>
    </div>
  )
}

export default CollabSearchForm