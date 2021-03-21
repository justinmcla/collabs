import SocialIcon from './SocialIcon'

const SocialIconBar = ({ profile }) => {
  return (
    <div className="flex flex-row">
      { profile.facebook !== "" ? <SocialIcon provider={'facebook'} handle={profile.facebook} /> : null }
      { profile.instagram !== "" ? <SocialIcon provider={'instagram'} handle={profile.instagram} /> : null }
      { profile.twitter !== "" ? <SocialIcon provider={'twitter'} handle={profile.twitter} /> : null }
      { profile.linkedin !== "" ? <SocialIcon provider={'linkedin'} handle={profile.linkedin} /> : null }
      { profile.medium !== "" ? <SocialIcon provider={'medium'} handle={profile.medium} /> : null }
      { profile.github !== "" ? <SocialIcon provider={'github'} handle={profile.github} /> : null }
      { profile.youtube !== "" ? <SocialIcon provider={'youtube'} handle={profile.youtube} /> : null }
      { profile.twitch !== "" ? <SocialIcon provider={'twitch'} handle={profile.twitch} /> : null }
    </div>
  )
}

export default SocialIconBar