'use client'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <h1 className='font-inter font-medium text-3xl'>
                    Motiondrive
                </h1>
            </Link>
            <UserButton afterSignOutUrl="/sign-in"/>
        </nav>
    </header>
  )
}

export default Navbar