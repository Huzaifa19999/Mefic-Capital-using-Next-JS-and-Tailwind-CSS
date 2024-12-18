import Image from 'next/image'
import React from 'react'

function Section6() {

    const images = [
        {src:'/meras.png',alt:'Image 1'},
        {src:'/weblogo 2.png',alt:'Image 2', className:'pt-10'},
        {src:'/hotel.png',alt:'Image 3', className:'pt-4'},
        {src:'/karam.png',alt:'Image 4', className:'pt-2'},
        {src:'/sultan.png',alt:'Image 5', className:'pt-3'},
        {src:'/body.png',alt:'Image 6', className:'pt-2'}
    ]

  return (
    <>
    <section className='section6-font flex flex-col items-center'>
        <h1 className='text-4xl text-center'>MEFIC Capital <span className ='font-bold text-[#E95A0C]'>Portfolio</span></h1>
        <br />
        <hr className='section6-hr' />
        <br />
        <p className='text-center md:text-base text-sm'>Office ipsum must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands.</p>
        <br />
        <div className='flex gap-7'>
            <p className='section-p-hover'>All</p>
            <p className='section-p-hover'>Real-Estate</p>
            <p className='section-p-hover'>Equity-Funds</p>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 px-4   gap-5 mt-8">
            {images.map((image, index) => (
                <div key={index} className=" border-collapse p-6 px-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={300} 
                        height={300} 
                        className={`object-contain w-full h-auto ${image.className || ''}`}
                    />
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Section6
