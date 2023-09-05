'use client'
import Image from 'next/image'
import { AvatarProps } from '@/Types'

const Avatar = ({ src, onClick }: AvatarProps) => {
  return (
    <Image
        className='rounded-full cursor-pointer'
        height={30}
        width={30}
        alt='Avatar'
        src={src || '/images/placeholder.jpg'}
        onClick={onClick}
    />
  )
}

export default Avatar