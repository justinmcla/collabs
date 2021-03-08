import QuickAccessButton from "./QuickAccessButton"

const QuickAccessCard = ({ title, link, content }) => {
  return (
    <a href={ link }>
      <div className="bg-gray-200 dark:bg-gray-800 w-auto flex flex-row m-12 items-center shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
        <QuickAccessButton title={ title } />
        <p className="p-4 max-w-sm italic text-black dark:text-white">{ content }</p>
      </div>
    </a>
  )
}

export default QuickAccessCard