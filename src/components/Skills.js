import React from 'react';

import { skills } from '../data';

const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>Practice Areas</h2>
        <p className='mx-auto px-6 text-justify lg:px-0 mb-[60px]'>
          We advise and represents clients in matters concerning trademarks, corporate law, and commercial transactions.
          We assist with the filing and prosecution of trademark applications, respond to examination reports, and handle oppositions before the Trademark Registry.
          Our team also works on matters involving the enforcement of trademark rights.
          In addition to intellectual property, we are engaged in advising on corporate structuring, incorporation, and compliance with statutory and regulatory obligations.
          This includes drafting and reviewing commercial agreements, advising on transactions, and providing support in general business law matters.
        </p>
        <div className='lg:grid lg:grid-cols-3 gap-12'>
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div key={index} className='flex flex-col items-center justify-center mb-16 lg:mb-0'>
                <img className='mb-6 w-20' src={icon} alt={title} />
                <h4 className='text-2xl mb-2 font-primary font-bold'>{title}</h4>
                <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
