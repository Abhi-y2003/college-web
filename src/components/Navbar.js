import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
            <nav class="bg-[#36454F] h-20 w-full pt-5 py-5 ">
              <Link to="/"><span class="text-white text-2xl md:text-3xl font-bold lg:text-4xl pl-12 lg:pl-24">Janagni</span></Link>

              <div className='md:hidden lg:hidden absolute text-white right-5 top-6 text-2xl'>
              <AiOutlineMenu />
              </div>

              <ul class=" pt-2 leading-[80px]  sm:grid sm:text-white sm:text-xl md:flex md:float-right md:text-sm md:gap-x-6 md:text-white md:mr-4 lg:flex lg:float-right  lg:gap-x-16 lg:text-white lg:text-lg lg:mr-12"  >
                <li><button>Event</button></li>
                <li><button>Merch</button></li>
                <li><button>menu</button></li>
                <li><button>CA portal</button></li>
                <li><button>Zonals</button></li>
                <li><Link to="/Dashboard"><button type="button" class=" px-2  font-medium text-black bg-yellow-400 rounded-lg border border-gray-200  hover:scale-110 transition-all delay-100 hover:rounded-xl">Login</button></Link></li>
              </ul>
            </nav>
        </header>
  )
}

export default Navbar;
