import React from 'react';
import { social, icons } from '../data';

const Contact = () => {
  return (
    <section id='contact' className='bg-primary text-white min-h-[732px] section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>Contact us</h2>
      </div>
      <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
        We welcome the opportunity to assist you with your legal requirements. Whether you seek advice on commercial contracts, intellectual property, corporate structuring, or regulatory compliance, our team is here to provide timely and strategic legal solutions tailored to your specific needs.
        Please feel free to reach out to us via phone, email, or by filling out the enquiry form below. One of our representatives will get in touch with you promptly to understand your matter and guide you through the appropriate course of action.
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-between mx-auto mb-[64px]'>
        <form className='px-8 lg:px-0 min-w-[30rem] flex flex-col space-y-6 m-auto'>
          <input className='form-control' placeholder='Full name' type='text' />
          <input className='form-control' placeholder='Email address' type='email' />
          <textarea className='textarea' placeholder='Message'></textarea>
          <button className='btn bg-accent hover:bg-accent-hover transition-all'>Send message</button>
        </form>
        <div className='flex flex-col item-center justify-between mx-auto h-[29rem] w-[30rem]'>
          <div className='text-left'>
            <p className='text-3xl'>How to Reach Us</p> <br />
            <p className='text-lg flex items-center gap-2'> <img src={icons.mail} alt="mail icon" width="20rem" /><a href="mailto:contact@atalaw.in">contact@atalaw.in</a></p>
            <p className='text-lg flex items-center gap-2'> <img src={icons.call} alt="mail icon" width="20rem" />+91-8890397826</p>
            <p className='text-lg flex items-center gap-2'> <img src={icons.office} alt="mail icon" width="20rem" />2nd Floor, A-38, Guru Sadhan, Sukhija Vihar, Vaishali Nagar, Jaipur, 302026</p> <br />
            <p>Office Hours: </p>
            <p>Monday to Friday - 10:00 AM to 6:00 PM</p>
            <p>(Saturday consultations by prior appointment only)</p> <br />



            <p className='text-sm italic text-justify'>
              We maintain strict confidentiality and ensure that all your queries are handled with utmost professionalism and discretion. <br />This email address is for Firm's internal use and convenience of clients. The Firm does not accept service of legal proceedings, correspondence etc on this email address as it is not accessed on a continued basis. Any such service is requested to be done by hand delivery at our office address.</p>
          </div>

          <div className='flex item-center justify-between mx-auto w-[10rem]'>
            {social.map((item, index) => {
              return (
                <a href="#" key={index}>
                  <img src={item.icon} alt="" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
