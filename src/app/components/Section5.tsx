import Image from 'next/image';
import React from 'react';

function Section5() {
  const cardData = [
    {
      imgSrc: '/section5-img1.png',
      title: 'MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31',
      description:
        'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e- services. Seamlessly empower growth.',
    },
    {
      imgSrc: '/section5-img2.png',
      title: 'MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group',
      description:
        'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e- services. Seamlessly empower growth.',
    },
    {
      imgSrc: '/section5-img3.png',
      title: 'partnership to establish the first Saudi investment fund to finance film',
      description:
        'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e- services. Seamlessly empower growth.',
    },
  ];

  return (
    <section className="px-4 py-8">
      <h1 className="text-3xl ms-2 text-center md:text-start">
        The <span className="font-bold">latest news</span> and our <br />
        <span className="text-[#E95A0C] font-bold">portfolio companies</span>
      </h1>
      <hr className="border-2  border-slate-500 w-36 mt-3 mx-auto md:mx-2" />
      <p className="md:w-7/12 ms-2 sm:w-8/12 md:text-start text-center my-4">
        Office ipsum you must be muted. Conversation banner gave dive
        investigation chime usability whatever. Winning of crystallize another
        container reinvent stands. Left you viral relaxation unlock t-shaped.
        Ideal deck support attached waste highlights game synchronise.
      </p>
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-4 border w-full sm:w-9/12 md:w-3/12 flex flex-col items-start shadow-lg transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            <Image
              src={card.imgSrc}
              alt={`Card image ${index + 1}`}
              height={300}
              width={400}
              className="object-cover mx-auto"
            />
            <h2 className="font-bold mt-4">{card.title}</h2>
            <p className="text-xs mt-2">{card.description}</p>
            <p className="text-sm text-end text-[#E95A06] font-bold mt-4 self-end cursor-pointer">
              Learn More...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section5;
