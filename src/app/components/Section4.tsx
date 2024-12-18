'use client'

import React from 'react';

function Section4() {
  const fundsData = [
    { name: 'SAR MURAHABA Fund', unitPrice: '100.5836', ytdChange: '2.74' },
    { name: 'Saudi Freestyle Equity Fund', unitPrice: '253.6258', ytdChange: '2.74' },
    { name: 'SAR MURAHABA Fund', unitPrice: '100.5836', ytdChange: '5.972' },
    { name: 'Saudi Freestyle Equity Fund', unitPrice: '253.6258', ytdChange: '2.74' },
    { name: 'SAR MURABAHA Fund', unitPrice: '100.5836', ytdChange: '5.972' },
  ];

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-4 '>
      <div className="overflow-x-auto px-4 py-6">
        <table className="table-auto w-full border-collapse border border-gray-300 hover:shadow-lg transition-shadow duration-200">
          <thead className="bg-[#25304F]  text-white font-bold">
            <tr>
              <th className=" px-4 py-2 text-left">MEFIC Funds</th>
              <th className=" px-4 py-2 text-left">Unit Price</th>
              <th className=" px-4 py-2 text-left">YTD Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {fundsData.map((fund, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#D6682C] text-white'}`}
              >
                <td className=" px-4 py-2">{fund.name}</td>
                <td className="px-4 py-2">{fund.unitPrice}</td>
                <td className="px-4 py-2">{fund.ytdChange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2">
        <button className="bg-slate-300 mb-3  font-bold text-black px-4 py-2 rounded">MEFIC FUNDS</button>
        <h1 className='text-3xl'>To <span className='font-bold'>Find</span> The Best <span className='text-[#E95A0C] font-bold'>MEFIC <br /> Funds?</span></h1>
        <br />
        <hr className='border-2 border-gray-700 w-32' />
        <br />
        <p className='w-10/12'>Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically maintain visualize customer directed convergence without revolutionary ROI.</p>
        <br />
        <br />
        <button className='border-2 border-red-500 p-3 hover:text-white hover:bg-red-500 hover:border-black font-bold rounded'>Book a Consultant</button>
      </div>
    </section>
  );
}

export default Section4;
