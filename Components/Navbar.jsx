import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
function Navbar() {
    const [open, setopen] = useState(false)
  return (
    <div className='p-4 mx-10 md:mx-32'>
        <div className="flex justify-between items-center">
            <div className="text-4xl font-bold">Heart</div>
            <div className="">
            <div className={`${open?"flex flex-col p-4 border-solid border-2 rounded-2xl bg-gray-400 -4 top-[4rem] absolute right-[2rem]":"hidden"} md:flex md:flex-row md:space-x-4`}>
                <div className='text-xl cursor-pointer hover:animate-bounce'>Home</div>
                <div className='text-xl cursor-pointer hover:animate-bounce'>Features</div>
                <div className='text-xl cursor-pointer hover:animate-bounce'>Predict</div>
                <div className='text-xl cursor-pointer hover:animate-bounce'>Contact Us</div>
            </div>
            <div className="md:hidden" onClick={()=>{setopen(!open)}}>
            <FiMenu/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar