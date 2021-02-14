import SplashTitle from '../components/SplashTitle'
import UniversalLogin from '../components/UniversalLogin'

const Splash = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-screen flex flex-row flex-wrap justify-center items-center">
      <SplashTitle/>
      <UniversalLogin />
    </div>
  )
}

export default Splash