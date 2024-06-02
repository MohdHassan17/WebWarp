import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Redirect, redirect } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import '../assets/css/Form.css'


function Form() {



    const form = useRef()
    const notify = () => toast('Message Sent Successfully');
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4y2yxr4', 'template_quujo9n', form.current, {
            publicKey: 'Ce0CfIdr7hLaGT4nE',
          })
          .then(
            () => {
            
              console.log('SUCCESS!');
              notify()
          
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

          
      };

  return (
    <>
  <div className='form-wrapper' id='contact'  data-aos="fade-zoom-in">
  
    <form ref={form} onSubmit={sendEmail}>
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
    <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 custom-heading">
                Send Us<span class="custom-gradient-text"> a Message</span>
            </h3>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Reach Out to Us! We Reply Swiftly to All Inquiries.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full form-btn-container">
        <input type="submit" value="SEND MESSAGE" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gradient-bg-button " />
                
                   </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">webwarp@gmail.com</a>
        
        </div>
      </div>
    </div>
  </div>
</section>
    </form>
   
   

    </div>
    <Toaster/>
    </>
  )
}

export default Form