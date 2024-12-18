import Image from 'next/image';
import React from 'react';

function Section2() {
  return (
    <section className="bg-[#181E2D]">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 pb-6 pt-6">
        <div className="ms-5 mb-6 md:ms-10">
          <h1 className="text-2xl md:text-3xl mt-3 text-white">
            Our <span className="font-extrabold">Services</span> &{' '}
            <span className="text-[#E95A0C] font-extrabold">Expertise</span>
          </h1>
          <hr className="mt-4 border-2 w-32 md:w-40 border-[#2D3C65] mb-4" />
        </div>
        <p className="text-white text-sm w-11/12 md:w-10/12 ms-5 md:ms-9">
          Office ipsum you must be muted. Conversation banner gave dive investigation chime
          usability whatever. Winning of crystallize another container reinvent stands. Left you viral
          relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
        </p>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start px-5">
      <h1 className='mt-12 text-white w-full md:w-3/12 lg:w-2/12 text-3xl'>What <br /><span className='font-extrabold'>problem</span> <br /> can we <span className='font-extrabold text-[#E95A0C]'>solve <br /> together</span>?</h1>
        <div className="bg-white p-6 w-full md:w-4/12 lg:w-3/12">
          <Image src="/assetallocation.png" alt="asset" width={70} height={70} />
          <h1 className="font-extrabold text-2xl mt-4">Assets</h1>
          <h1 className="text-xl mb-3">Management</h1>
          <p className="w-full text-sm">
            Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize
            scalable metrics whereas proactive e-services. Seamlessly empower growth.
          </p>
          <p className="text-[#E95A0C] mt-4">Learn More...</p>
        </div>
        <div className="bg-white p-6 w-full md:w-4/12 lg:w-3/12">
          <Image src="/assetallocation.png" alt="asset" width={70} height={70} />
          <h1 className="text-2xl mt-4">
            Private <span className="font-extrabold">Equity</span>
          </h1>
          <h1 className="text-xl mb-3">& IB</h1>
          <p className="w-full text-sm">
            Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize
            scalable metrics whereas proactive e-services. Seamlessly empower growth.
          </p>
          <p className="text-[#E95A0C] mt-4">Learn More...</p>
        </div>
        <div className="bg-white p-6 md:w-full lg:w-3/12 ">
          <Image src="/assetallocation.png" alt="asset" width={70} height={70} />
          <h1 className="font-extrabold text-2xl mt-4">Real Estate</h1>
          <h1 className="text-xl mb-3">Investments</h1>
          <p className="w-full text-sm">
            Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize
            scalable metrics whereas proactive e-services. Seamlessly empower growth.
          </p>
          <p className="text-[#E95A0C] mt-4">Learn More...</p>
        </div>
      </div>

      <div className="mt-8">
        <Image
          className="w-full"
          src="/component6.png"
          alt="components"
          width={1050}
          height={550}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Section2;
