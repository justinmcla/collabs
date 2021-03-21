import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { ReactComponent as Facebook } from '../../assets/Facebook.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter.svg'
import { ReactComponent as LinkedIn } from '../../assets/LinkedIn.svg'
import { ReactComponent as Medium } from '../../assets/Medium.svg'
import { ReactComponent as Github } from '../../assets/Github.svg'
import { ReactComponent as Youtube } from '../../assets/Youtube.svg'
import updateProfile from '../../actions/profile/updateProfile'

const EditProfile = () => {
  const profile = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()
  const [formData, setFormData] = useState({})

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
      dispatch(updateProfile(token, formData))
    }, [getAccessTokenSilently, formData, dispatch]
  )

  return (
    <form className="grid grid-flow-row gap-4 m-4" onSubmit={handleSubmit}>
      <label className="text-sm" htmlFor="name">NAME</label>
      <input id="name" type="text" name="name" onChange={handleChange} value={formData.name} defaultValue={ profile.name } className="input-field"/>
      <label className="text-sm" htmlFor="profession">PROFESSION</label>
      <input id="profession" type="text" name="profession" onChange={handleChange} value={formData.profession} defaultValue={ profile.profession } className="input-field"/>
      <div className="flex flex-row justify-between align-bottom">
        <div>
          <label className="text-sm" htmlFor="city">CITY</label><br />
          <input id="city" type="text" name="city" onChange={handleChange} value={formData.city} defaultValue={ profile.city } className="input-field"/>
        </div>
        <div>
          <label className="text-sm" htmlFor="state">STATE</label><br />
          <select id="state" name="state" value={formData.state} onChange={handleChange} defaultValue={ profile.state } className="input-field mt-1">
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
            <option value="AS">AS</option>
            <option value="GU">GU</option>
            <option value="MH">MH</option>
            <option value="FM">FM</option>
            <option value="MP">MP</option>
            <option value="PW">PW</option>
            <option value="PR">PR</option>
            <option value="VI">VI</option>
          </select>
        </div>
        <div>
          <label className="text-sm" htmlFor="zip">ZIP</label><br />
          <input id="zip" type="text" name="zip" onChange={handleChange} value={formData.zip} defaultValue={ profile.zip } className="input-field"/>
        </div>
      </div>
      <label className="text-sm" htmlFor="about">ABOUT</label>
      <textarea id="about" name="about" onChange={handleChange} value={formData.about} defaultValue={ profile.about } className="input-field"></textarea>
      <label className="text-sm" htmlFor="url">PUBLIC URL</label>
      <div className="flex flex-row">
        <span>/</span><input className="ml-1 input-field flex-grow" id="url" type="text" name="url" onChange={handleChange} value={formData.url} defaultValue={ profile.url } />
      </div>
      <span className="text-sm">SOCIAL LINKS</span>
      <div className="flex flex-row">
        <label htmlFor="facebook" className="mx-4"><Facebook /></label>
        <input id="facebook" name="facebook" value={formData.facebook} defaultValue={ profile.facebook } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="instagram" className="mx-4"><Instagram /></label>
        <input id="instagram" name="instagram" value={formData.instagram} defaultValue={ profile.instagram } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="twitter" className="mx-4"><Twitter /></label>
        <input id="twitter" name="twitter" value={formData.twitter} defaultValue={ profile.twitter } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="linkedin" className="mx-4"><LinkedIn /></label>
        <input id="linkedin" name="linkedin" value={formData.linkedin} defaultValue={ profile.linkedin } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="medium" className="mx-4"><Medium /></label>
        <input id="medium" name="medium" value={formData.medium} defaultValue={ profile.medium } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="github" className="mx-4"><Github /></label>
        <input id="github" name="github" value={formData.github} defaultValue={ profile.github } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="youtube" className="mx-4"><Youtube /></label>
        <input id="youtube" name="youtube" value={formData.youtube} defaultValue={ profile.youtube } onChange={handleChange} className="input-field flex-grow" />
      </div>
      <input type="submit" value="Save Changes" className="p-3 m-4 transform hover:bg-green-200 ease-in-out duration-300 cursor-pointer" />
    </form>
  )
}

export default EditProfile