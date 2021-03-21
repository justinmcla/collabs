import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md m-6 p-4 w-auto transition duration-500 ease-in-out transform hover:-translate-y-2 max-w-sm">
      <h2 className="text-lg font-bold">{ post.title }</h2>
      <small><Link to={`/profile/${ post.author.url }`}>{ post.author.name }</Link>, { post.author.city }, { post.author.state }</small>
      <p className="text-justify mt-2">{ post.content }</p>
    </div>
  )
}

export default Post