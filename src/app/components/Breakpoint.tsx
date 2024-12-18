'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Navbar() {
  // Track if the component is mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted on the client side
    setMounted(true);
  }, []);

  // If not mounted yet, don't render the component to avoid SSR mismatch
  if (!mounted) {
    return null;
  }

  return  (
      <div>
          
        {/* <img className="w-25 h-15  " src="/weblogo.png" alt="" /> */}
         <br /> <br />
         {/* <section className="bg-gray-900 min-h-screen "> */}
          
          <div>
       



<section className="bg-gray-900">
        <div>
        <nav className="flex flex-wrap items-center justify-between p-7 bg-gray-900">
  <div className="flex items-center space-x-4 ">
    <img  src="n.png" alt="Contact Icons" className="w-[310px] flex  cursor-pointer  h-auto absolute right-10
    sm:  " />
    {/* <!-- Other nav items --> */}
  </div>
</nav>

          <nav className="flex flex-wrap justify-end p-20">
           
            <img className="absolute flex flex-wrap left-0 -translate-y-6" src="weblogo2.jpg" alt="" />

            <img className='cursor-pointer flex flex-wrap mx-10' src="f18.png" alt="" />

          
             
           
            
            
          </nav>

           
        </div>
        
        
      </section>
      
      


      
    </div>
 
  
      </div>


    )
  }


export default Navbar