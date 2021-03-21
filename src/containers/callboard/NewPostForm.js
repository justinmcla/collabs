import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import createPost from '../../actions/callboard/createPost'


const NewPostForm = () => {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  const handleChange = useCallback(
    event => setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }), [formData]
  )

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      dispatch(createPost(token, formData))
      event.target.reset()
    }, [getAccessTokenSilently, dispatch, formData]
  )

  return (
    <form className="flex-grow m-4 max-w-lg grid grid-cols-1 grid-flow-row gap-4" onSubmit={ handleSubmit } id="newPostForm">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" onChange={ handleChange } />
      <label htmlFor="content">Message</label>
      <textarea id="content" name="content" onChange={ handleChange } />
      <input type="submit" id="submit" value="Create Post" className="p-2 w-min bg-transparent border-2 border-thMagenta text-thMagenta" />
    </form>
  )
}

export default NewPostForm