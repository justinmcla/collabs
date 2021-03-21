import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { ReactComponent as Check } from '../../assets/Check.svg'
import { ReactComponent as LoadingSpinner } from '../../assets/LoadingSpinner.svg'
import updateImage from '../../actions/profile/updateImage'

const ProfilePhotoForm = () => {
  const [fileLoaded, setFileLoaded] = useState(0)
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()
  const isLoading = useSelector(state => state.profile.isLoading)

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      const token = await getAccessTokenSilently()
      const data = new FormData()
      data.append("profile[profile_picture]", event.target.fileInput.files[0], event.target.fileInput.value)
      dispatch(updateImage(data, token))
      setFileLoaded(0)
    }, [dispatch, getAccessTokenSilently]
  )

  if (isLoading) {
    return (
      <span><LoadingSpinner className="w-48" /></span>
    )
  } else {
    return (
    <div>
      <form className="flex flex-row items-center" onSubmit={ handleSubmit } id="imageUpload">
        <label htmlFor="fileInput" className="p-3 bg-gray-100 dark:bg-gray-700 cursor-pointer transform hover:shadow-lg hover:bg-green-200 ease-in-out duration-300">Change Profile Image</label>
        <input type="file" id="fileInput" name="fileInput" className="hidden" onInput={ () => setFileLoaded(1) } />
        <span>{ fileLoaded === 1 ? <Check className="w-4 ml-4 fill-current text-green-500"/> : null }</span>
        <input type="submit" value="Upload" className="m-4 p-3 bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-green-200 ease-in-out duration-300"/>
      </form>
    </div>
    )
  }
}

export default ProfilePhotoForm