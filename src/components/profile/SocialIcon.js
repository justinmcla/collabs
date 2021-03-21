import { ReactComponent as Facebook } from '../../assets/Facebook.svg'
import { ReactComponent as Github } from '../../assets/Github.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as LinkedIn } from '../../assets/LinkedIn.svg'
import { ReactComponent as Medium } from '../../assets/Medium.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter.svg'
import { ReactComponent as Youtube } from '../../assets/Youtube.svg'

const SocialIcon = ({ provider, handle }) => {
  switch(provider) {
    case "facebook":
      return <a href={`https://facebook.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Facebook /></a>
    case "github":
      return <a href={`https://github.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Github /></a>
    case "instagram":
      return <a href={`https://instagram.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Instagram /></a>
    case "linkedin":
      return <a href={`https://linkedin.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><LinkedIn /></a>
    case "medium":
      return <a href={`https://medium.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Medium /></a>
    case "twitter":
      return <a href={`https://twitter.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Twitter /></a>
    case "youtube":
      return <a href={`https://youtube.com/${ handle }`} className="p-1 transform hover:text-thMagenta duration-300 ease-in-out"><Youtube /></a>
    default:
      return null
  }
}

export default SocialIcon