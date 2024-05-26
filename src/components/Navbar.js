import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import "../assets/css/Navbar.css"
import Warp from '../assets/images/Warp.png'


 

export default function Navbar() {
  return (
    <>
    <div className="logo-banner-wrapper">
      <span className='logo-banner-phone'>+92 331-455-0893</span>
      <div className="logo-img-container">
        <img src={Warp} alt="" className="logo-img" />
      </div>
      <span className='logo-banner-phone'><a href="mailto:webwarp@gmail.com">webwarp@gmail.com</a></span>
    </div>
   
    </>
  )
}
