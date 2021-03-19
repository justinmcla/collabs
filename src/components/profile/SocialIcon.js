import { ReactComponent as Facebook } from '../../assets/Facebook.svg'
import { ReactComponent as Github } from '../../assets/Github.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as LinkedIn } from '../../assets/LinkedIn.svg'
import { ReactComponent as Medium } from '../../assets/Medium.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter.svg'
import { ReactComponent as Youtube } from '../../assets/Youtube.svg'

const SocialIcon = ({ provider, handle }) => {
  switch(provider) {
    case "Facebook":
      return <a href={`https://facebook.com/${ handle }`} className="p-1"><Facebook /></a>
    case "Github":
      return <a href={`https://github.com/${ handle }`} className="p-1"><Github /></a>
    case "Instagram":
      return <a href={`https://instagram.com/${ handle }`} className="p-1"><Instagram /></a>
    case "LinkedIn":
      return <a href={`https://linkedin.com/${ handle }`} className="p-1"><LinkedIn /></a>
    case "Medium":
      return <a href={`https://medium.com/${ handle }`} className="p-1"><Medium /></a>
    case "Twitter":
      return <a href={`https://twitter.com/${ handle }`} className="p-1"><Twitter /></a>
    case "Youtube":
      return <a href={`https://youtube.com/${ handle }`} className="p-1"><Youtube /></a>
    default:
      return null
  }
}

export default SocialIcon