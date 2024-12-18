import Image from 'next/image'
import React from 'react'

function Section0() {
  return (
    <section className='bg-[#181E2D] ps-4'>
      <button className='bg-[#2D3365] mt-10 text-white p-2 rounded-sm'>We believe that, every client is a partner</button>
      <br />
      <h1 className='text-3xl mt-3 ms-2 text-white'>Your future financial <br /><span className='font-extrabold'>Investment made</span>  easier <br />with <span className='font-extrabold text-[#E95A0C]'>MEFIC</span></h1>
      <hr className='ms-2 border-4 mt-4 mb-4 border-[#2D3365] w-40 sm:w-60 md:w-80' />
      <p className='text-gray-400 ms-2 w-10/12'>Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.</p>
      <div className='flex mt-4 pb-4 ms-2'>
        <button className='text-white border-2 p-2 rounded hover:bg-orange-600 border-orange-600'>Book a Consultant</button>
        <button className='text-white ms-2 p-2 hover:bg-orange-600 border-2 rounded border-orange-600'>Login</button>
      </div>
      {/* <Image alt='cover' width={100} height={100} className='w-full' src={'/section0-cover.png'}/> */}
    </section>
  )
}

export default Section0
