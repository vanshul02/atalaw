import React, { useRef, useState } from 'react';
import { social, icons } from '../data';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bpgyels', 'template_uzgmymp', form.current, {
        publicKey: 'pp4o-rhPGiA9yjRcH',
      })
      .then(
        () => {
          console.log('Sent Mail to contact@atalaw.in!');
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            window.location.reload();
          }, 2000);
        },
        (error) => {
          console.log('FAILED to send mail!', error.text);
        },
      );
  };
  return (
    <section id='contact' className='bg-primary text-white min-h-[732px] section'>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white text-primary rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
            <p className="text-lg font-semibold mb-2">Mail sent successfully!</p>
            <p className="text-sm">Refreshing page...</p>
          </div>
        </div>
      )}
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>Contact us</h2>
      </div>
      <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
        We welcome the opportunity to assist you with your legal requirements. Whether you seek advice on commercial contracts, intellectual property, corporate structuring, or regulatory compliance, our team is here to provide timely and strategic legal solutions tailored to your specific needs.
        Please feel free to reach out to us via phone, email, or by filling out the enquiry form below. One of our representatives will get in touch with you promptly to understand your matter and guide you through the appropriate course of action.
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-between mx-auto mb-[64px]'>
        <form className='px-8 lg:px-0 flex flex-col space-y-6 m-auto  w-full lg:w-[50%] max-w-[500px]' ref={form} onSubmit={sendEmail}>
          <input className='form-control' placeholder='Full name' name="user_name" type='text' />
          <input className='form-control' placeholder='Email address' name="user_email" type='email' />
          <textarea className='textarea' placeholder='Message' name="message"></textarea>
          <button type="submit" className='btn bg-accent hover:bg-accent-hover transition-all'>Send message</button>
        </form>
        <div className='flex flex-col item-center justify-between mx-auto h-[29rem] mt-8 lg:mt-0'>
          <div className='text-left max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
            <p className='text-3xl'>How to Reach Us</p> <br />
            <p className='flex items-center gap-2'> <img src={icons.mail} alt="mail icon" width="20rem" /><a href="mailto:contact@atalaw.in">contact@atalaw.in</a></p>
            <p className='flex items-center gap-2'> <img src={icons.call} alt="mail icon" width="20rem" />+91-8890397826</p>
            <p className='flex items-start gap-2'> <img className='mt-1' src={icons.office} alt="mail icon" width="20rem" />2nd Floor, A-38, Guru Sadhan, Sukhija Vihar, Vaishali Nagar, Jaipur, 302026</p> <br />
            <p>Office Hours: </p>
            <p>Monday to Friday - 10:00 AM to 6:00 PM</p>
            <p>(Saturday consultations by prior appointment only)</p> <br />



            <p className='text-sm italic text-justify'>
              We maintain strict confidentiality and ensure that all your queries are handled with utmost professionalism and discretion.</p>
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
