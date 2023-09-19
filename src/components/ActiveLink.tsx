'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react'

type Props = {
    route:string;
    name: string;
}
const ActiveLink = ({ name,route}:Props) => {
    const pathname = usePathname();
  return (
    <Link className={`${pathname === route ? 'font-bold text-rose-500 underline' : 'font-light'} mx-2`} href={route}>{name}</Link>
  )
}

export default ActiveLink;