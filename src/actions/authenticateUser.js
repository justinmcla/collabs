const authenticateUser = async (accessToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_API}/sessions`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    const json = await response.json()
    if (json.status === 200) {
      window.localStorage.setItem('endpoint', json.user)
      window.localStorage.setItem('user', json.id)    
    } else {
      throw new Error('Unable to authenticate')
    }
  } catch (errors) {
    console.error(errors)
  }
}

export default authenticateUser