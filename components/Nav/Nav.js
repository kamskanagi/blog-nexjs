import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='navb'>
      <div className='nav'>
          <p className='logo'><strong>Demo</strong></p>
          <div className='home'>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          
      </div>
     
      </div>
  )
}
