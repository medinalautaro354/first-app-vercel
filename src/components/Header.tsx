import React from 'react'
import ActiveLink from './ActiveLink';
import { routes } from '@/routes';

const Header = () => {
  return (
    <nav className='bg-gray-800 p-5'>
      {routes.map(({route, name}) => (
        <ActiveLink key={name} name={name} route={route} />
      ))}
    </nav>
  )
}

export default Header