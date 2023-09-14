'use client'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { signIn, signOut, useSession } from 'next-auth/react'
import Avatar from './Avatar'
const Navbar = () => {
    const session = useSession();
    console.log(session);

  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <h1 className='font-inter font-medium text-3xl'>
                    Motiondrive
                </h1>
            </Link>
            {session.status === 'unauthenticated' || session.status === 'loading' ? (                
                <CustomButton
                        title='sign In'
                        btnType='button'
                        containerStyles='text-primary-green
                        rounded-full bg-white min-w-[130px]'
                        handleClick={() => signIn('google')}
                    />
            ) : (
                <Avatar
                    src={session.data?.user?.image || null}
                    onClick={signOut}
                />
            )}
        </nav>
    </header>
  )
}

export default Navbar