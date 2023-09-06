import React from 'react';
import Food from '../assets/projects/Eats.png';
import CRUD from '../assets/projects/crud.png';
import Timer from '../assets/projects/timer.png'

const Project = () => {
  return (



    // container
    <div name='project' className='w-full bg-[#26252Aff] pt-[150px]'>

      <div className='text-center text-6xl font-bold'>
        <span className='bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-orange-400'>My Workshop</span>
      </div>

      <div className='mx-[50px] text-white grid md:grid-cols-3 gap-6 p-4 py-12'>

        {/* card */}
        <div className='relative'>
          <div className='absolute w-full h-full bg-black/50 flex flex-col justify-end rounded-xl items-center'>
            <h1 className='text-4xl font-bold mb-4 text-center'>Project <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500'>1st</span></h1>
            <p className='mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='bg-orange-400 mb-4 w-[60px] rounded-xl'><a href="https://besteats-26606.firebaseapp.com/">Go</a></button>
          </div>
          <img className='w-full rounded-2xl h-[500px] object-cover' src={Food} alt="pic" />
        </div>

        {/* card */}
        <div className='relative'>
          <div className='absolute w-full h-full bg-black/50 flex flex-col justify-end rounded-xl items-center'>
            <h1 className='text-4xl font-bold mb-4 text-center'>Project <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500'>1st</span></h1>
            <p className='mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='bg-orange-400 mb-4 w-[60px] rounded-xl'><a href="https://github.com/JakyTann/CRUD_Next.git">Go</a></button>
          </div>
          <img className='w-full rounded-2xl h-[500px] object-contain' src={CRUD} alt="" />
        </div>

        {/* card */}
        <div className='relative'>
          <div className='absolute w-full h-full bg-black/50 flex flex-col justify-end rounded-xl items-center'>
            <h1 className='text-4xl font-bold mb-4 text-center'>Project <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500'>1st</span></h1>
            <p className='mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='bg-orange-400 mb-4 w-[60px] rounded-xl'><a href="https://timer-11c62.firebaseapp.com/">Go</a></button>
          </div>
          <img className='w-full rounded-2xl h-[500px] object-cover' src={Timer} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Project
