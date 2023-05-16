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
      <div className='headerTitle'>
            <span className='headerTitleSm'> Nextjs & Strapi </span>
            <span className='headerTitleLg'> Blog</span>
        </div>
      <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
  )
}
