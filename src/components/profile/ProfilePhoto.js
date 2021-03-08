const ProfilePhoto = ({ image, name }) => (
  <div>
    <img src={ image } className="border-4 border-white rounded-full w-48 mx-auto shadow-xl" alt={ name }/> 
  </div>
)

export default ProfilePhoto