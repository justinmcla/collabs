import { ReactComponent as Edit } from '../../assets/Edit.svg'

const ProfileProperty = ({ column, value }) => {
  return (
    <tr className="hover:bg-gray-700">
      <td id={ column.concat('Col') } className="p-4">{ column }</td>
      <td id={ column.concat('Val') } className="p-4">{ value }</td>
      <td id={ column.concat('Edit') } className="p-4 fill-current text-gray-200 hover:text-thMagenta transform scale-50" onClick={handleClick}><Edit /></td>
    </tr>
  )
}

export default ProfileProperty