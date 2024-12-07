import React, { useEffect, useRef } from 'react'
import { Copyright, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import gsap from 'gsap'

const SubFooter = () => {
  const currentYear = new Date().getFullYear()
  
  const subFooterRef = useRef(null)
  const logoRef = useRef(null)
  const socialRef = useRef(null)
  const copyrightRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const subFooter = subFooterRef.current
    const logo = logoRef.current
    const social = socialRef.current
    const copyright = copyrightRef.current
    const links = linksRef.current

    gsap.set(subFooter, { opacity: 0 })
    gsap.set([logo, social, copyright, links], { opacity: 0, y: 50 })

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to(subFooter, { opacity: 1, duration: 1.5 })
      .to(logo, { opacity: 1, y: 0, duration: 1.5 }, '-=1')
      .to(social, { opacity: 1, y: 0, duration: 1.5 }, '-=1.3')
      .to(copyright, { opacity: 1, y: 0, duration: 1.5 }, '-=1.3')
      .to(links, { opacity: 1, y: 0, duration: 1.5 }, '-=1.3')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <footer ref={subFooterRef} className="bg-secondary py-6 px-4 md:px-6 lg:px-8 uppercase">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 sm:space-y-8 lg:flex-row lg:space-y-0">
        <div ref={logoRef} className="flex items-center">
          <span className="font-extrabold text-2xl sm:text-3xl font-mono text-white">Web Squad</span>
        </div>

        <div ref={socialRef} className='flex flex-col items-center space-y-4 sm:space-y-6'>
          <div className='flex space-x-6 sm:space-x-8'>
            <Facebook className='w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition duration-150'/>
            <Twitter className='w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition duration-150'/>
            <Instagram className='w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition duration-150'/>
            <Linkedin className='w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition duration-150'/>
          </div>
          <div ref={copyrightRef} className="flex items-center text-xs sm:text-sm text-gray-400">
            <Copyright className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{currentYear} Web Squad. All rights reserved.</span>
          </div>
        </div>

        <div ref={linksRef} className="flex flex-col items-center text-sm space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="/privacy" className="text-gray-400 hover:text-white font-bold transition duration-150">
            Privacy Policy
          </a>
          <a href="/policy" className="text-gray-400 hover:text-white font-bold transition duration-150">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SubFooter

