import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full bg-[#26252Aff] text-white pt-[100px]'>

            {/* Title */}
            <div className='flex flex-col justify-center items-center pt-10'>
                <p>I hope you Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div className='flex flex-col justify-center items-center text-5xl font-bold md:text-7xl lg:text-8xl xl:text-9xl'>
                    <h1>I'm Jakaphan</h1>
                    <h1><span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500'>Developer</span></h1>
                </div>
            </div>

            {/* Main */}
            <div className='flex flex-col justify-center items-center p-10 lg:grid lg:grid-cols-3'>
                <div className='text-lg text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>adipisicing elit. Beatae in, dolores</p>
                    <p>provident vero tempore recusandae.</p>
                </div>
                <div className='my-10 flex justify-center'>
                    <img className='h-[500px] rounded-full' src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
                <div className='text-lg text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>adipisicing elit. Beatae in, dolores</p>
                    <p>provident vero tempore recusandae.</p>
                </div>
            </div>
        </div>
    )
}

export default About
