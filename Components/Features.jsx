import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <div className="text-[1.2rem] sm:text-3xl font-bold mb-16">
        Results Based on Dataset Available
        </div>
        <hr/>
        <div className="text-[1rem] mb-8">Model's accuracy is 88.912 +- 1.4%. The following are the results of analysis done on the available heart disease dataset</div>
        <div className="mt-2">
            <Image src={"/flow.jpg"} height={600} width={600}/>
        </div>
    </div>
  )
}

export default Features