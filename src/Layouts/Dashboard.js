import React from 'react'
import { TiUser } from "react-icons/ti";
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Dashboard = () => {
  return (
    <div className="bg-[url('https://thomso.in/static/media/eventback2.7bc89df549ae88406a96.webp')] -z-40">
    <Navbar/>
    <div className='relative flex border border-white m-10 text-white py-10 text-xl'>
      <div className='flex flex-col border-r border-slate-400 px-10 gap-y-4 '>
      <TiUser size={70}/>
      <p>Abhishek singh</p>
      <p>ID:226330011</p>

      <div className='gap-3 flex flex-col'>
      <button type="button" class=" px-2  font-medium text-white  rounded-lg hover:text-black hover:bg-white hover:border-gray-200 transition-all delay-100 hover:rounded-xl">
      Profile
      </button>
      <button type="button" class=" px-2  font-medium text-white  rounded-lg hover:text-black hover:bg-white hover:border-gray-200 transition-all delay-100 hover:rounded-xl">
      My Events
      </button>
      <button type="button" class=" px-2  font-medium text-white  rounded-lg hover:text-black hover:bg-white hover:border-gray-200 transition-all delay-100 hover:rounded-xl">
      Payemnt
      </button>
      <button type="button" class=" px-2  font-medium text-black bg-red-500 rounded-lg border border-gray-200  hover:scale-110 transition-all delay-100 hover:rounded-xl">Log Out</button>
      </div>
      </div>

      <div className='absolute right-5 top-3'>
      <Link to="/"><button type="button" class=" px-2 hover:text-yellow-400 hover:bg-black font-medium text-black bg-yellow-400 rounded-lg border border-gray-200  hover:scale-110 transition-all delay-100 hover:rounded-xl">+ Add</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
