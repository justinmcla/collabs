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
    <form className="m-4 max-w-lg grid grid-cols-1 grid-flow-row gap-4" onSubmit={ handleSubmit }>
      <input placeholder="Search by name or profession..." type="text" value={value} onChange={event => setValue(event.target.value)} className="input-field"/>
      <input type="submit" value="Search" className="submit-btn"/>
    </form>
  )
}

export default CollabSearchForm