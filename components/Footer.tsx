import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/Constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 '>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 p-6 py-10'>
            <div className='flex flex-col justify-start sm:items-start gap-6 items-center'>
                <div className='font-inter text-xl font-medium'>
                    Motiondrive
                </div>
                <p className='text-base text-gray-700'>
                    Motiondrive 2023 <br />
                    All rights reserved &copy;
                </p>
            </div>
                <div className='footer__links'>
                    {footerLinks.map((Links) => (
                        <div key={Links.title} className='footer__link'>
                            <h3 className='font-bold'>{Links.title}</h3>
                            {Links.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className='text-gray-500'
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center felx-wrap mt-20 border-t broder-gray-100 sm:px-6 py-10'>
                <p>@2023 Motiondrive. All Rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href='/' className='text-gray-500'>
                        Privacy Policy
                    </Link>
                    <Link href='/' className='text-gray-500'>
                        Terms of Use
                    </Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer