import { cn } from '@/lib/utils'
import React from 'react'
import { IconLogo } from './ui/icons'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-2 flex justify-between items-center z-10 backdrop-blur lg:backdrop-blur-none bg-background/80 lg:bg-transparent">
      <div className='container mx-auto'>
        <a href="/">
          <IconLogo className={cn('w-10 h-10')} />
        </a>
      </div>
    </header>
  )
}

export default Header
