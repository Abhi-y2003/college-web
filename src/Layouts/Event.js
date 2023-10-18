import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai';

const Event = () => {
  return (
    <div className="bg-[url('https://thomso.in/static/media/eventback2.7bc89df549ae88406a96.webp')] -z-40">
    <header>
            <nav class="bg-[#36454F] h-20 w-full pt-5 py-5 ">
              <span class="text-white text-2xl md:text-3xl font-bold lg:text-4xl pl-12 lg:pl-24">Janagni</span>

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
    <div>
       <div class="px-7 sm:grid md:px-14 lg:px-32  md:grid md:grid-cols-2 gap-24 text-white ">  

  <div>
        <div class="flex text-md hidden md:block md:pt-10 lg:pt-20 md:text-sm sm:order-2">
          <p>Events.ChoreoDanceFootloose</p>
        </div>
        
        <div class=" lg:pb-24 md:pb-10 md:pt-5">
          <div class="flex gap-2 py-10">
              <p class="md:text-4xl lg:text-5xl text-2xl font-bold">FOOTLOOSE</p>
              <p class="flex justify-center items-center text-sm">(team)</p>
          </div>
          
          <div class="lg:pb-24 text-sm md:text-md lg:text-md  md:pb-10">
              <p> Are you passionate about dancing? Do you have tingling sensations run down your feet when you hear music? Then come let yourself loose and dance to express. Prepare, perfect, perform and if you stumble then make it a part of the dance.</p>
          </div>

          <div class=" flex gap-3 hidden md:block lg:block md:pb-10 lg:pb-24">
              <p class="font-bold">Note:</p>
              <p>The prize money is subjected to the amount of participation in the event and will solely be decided by managing team of Thomso.</p>
          </div>
          <div class="flex gap-2 py-6">
              <div class="text-lg">
                <p class="font-bold">Prize</p>  
                <p class="font-bold">Worth</p>
              </div>
              <div class="flex gap-2">
                <p class="text-5xl ">:</p>
                <p class="text-5xl ">120K</p>
              </div>
          </div>
          
          <div class="pb-24">
          <Link to = "/Dashboard"><button type="button" class="shadow-2xl sr py-2.5 px-5 my-2 mr-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  hover:scale-105 transition-all delay-100">Register</button></Link>
            <button type="button" class="py-2.5 px-5 m-2 mb-2 text-xl font-medium text-white  rounded-lg border border-gray-200  hover:scale-105 transition-all delay-100  ">Rule Book</button>
          </div>
  </div>

  </div>
  

</div>

</div>
</div>
  )
}

export default Event
