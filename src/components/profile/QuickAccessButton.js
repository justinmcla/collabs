const QuickAccessButton = ({ title }) => {

  return (
    <div className="border rounded-full themed-gradient flex w-40 h-40 whitespace-normal items-center text-xl m-6 shadow-xl border-none">
      <span className="text-white font-bold w-min text-center mx-auto">{ title }</span>
    </div>
  )
}

export default QuickAccessButton