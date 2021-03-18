import React, { useEffect } from 'react'
import CollabCard from '../../components/collabs/CollabCard'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import searchCollabs from '../../actions/collabs/searchCollabs'
import CollabSearchForm from '../../components/collabs/CollabSearchForm'

const CollabSearch = () => {
  const collabs = useSelector(state => state.collab.search.results) || []
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()
  
  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently()
      dispatch(searchCollabs(token))
    })()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div className="h-screen w-full flex flex-row flex-nowrap bg-gray-200 dark:bg-gray-800">
      <div className="p-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300 font-body italic cursor-default">Find your next collaborator.</h1>
        <br />
        <CollabSearchForm />
        { collabs.map(collab => <CollabCard profile={ collab } key={ collab.uuid } />) }
      </div>
    </div>
  )
}

export default CollabSearch