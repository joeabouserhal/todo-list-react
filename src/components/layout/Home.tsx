import { HiPlus } from 'react-icons/hi'

const Home: React.FC = () => {
  return (
    <div>
      <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed right-5 bottom-5 rounded-full">
        <HiPlus size="5vh" />
      </button>
    </div>
  )
}

export default Home
