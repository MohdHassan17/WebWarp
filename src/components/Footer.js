import React from 'react'
import Logo from '../assets/images/Warp.png'
import { FaInstagram , FaWhatsapp, FaTwitter, FaFacebook} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function Footer() {
  return (
    <> 


<footer class="bg-gray bg-gray-900" style={{backgroundColor: '#03254E'}}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={Logo} class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white footer-heading" >Webxus</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
             
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Pages</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Contact Us</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Services</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Follow Us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">LinkedIn</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Webwarp</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500  dark:hover:text-white">
                    <FaFacebook/>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500  dark:hover:text-white ms-5">
                    <FaWhatsapp/>
                  <span class="sr-only">Whatsapp</span>
              </a>
              <a href="#" class="text-gray-500 dark:hover:text-white ms-5">
                  <FaTwitter/>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500  dark:hover:text-white ms-5">
                  <FaInstagram />
                  <span class="sr-only">Instagram</span>
              </a>
              <a href="#" class="text-gray-500  dark:hover:text-white ms-5">
                  <FaLinkedin/>
                  <span class="sr-only">LinkedIn</span>
              </a>
             
          </div>
      </div>
    </div>
</footer>



    
    
    </>
  )
}

export default Footer