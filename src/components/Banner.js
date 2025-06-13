import React from 'react';

import Header from './Header';

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#02386E] to-[#00172D]'
    >
      <Header />
      <div className='container mx-auto h-full lg:flex pt-32'>
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-accent text-6xl lg:text-7xl mb-4 
            lg:mt-[70px] leading-tight lg:leading-[90px]'>
            WELCOME TO<br /> <span className='text-accent'>ATA Law Partners & Associates</span>
          </h1>
          <p className='max-w-5xl text-xl mx-auto lg:mb-[50px] text-accent
              lg:max-0 '>
            <p className='text-2xl'>Strategic Legal Advisory | Expert Representation | Specializing in IPR and Corporate Law <br /></p>
            <br /><br />
            ATA Law Partners & Associates delivers comprehensive legal solutions, providing strategic advisory services and expert representation in Intellectual Property Rights (IPR) and Corporate Law matters.
            We are your trusted partners, committed to safeguarding your legal rights and advancing your business interests with precision and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
