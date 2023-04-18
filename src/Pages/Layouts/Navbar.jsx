import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Bookmarks", link: "/bookmarks" },
  ]
  const location = useLocation();
  const path = location?.pathname;
  return (
    <div className='fixed w-full px-4 z-10  text-gray-100 py-3 md:py-5 md:px-24 flex justify-between'>
      {Links.map((link,index) => (
        <Link key={index} className={`${path === link?.link ?"font-bold cursor-default":"font-light cursor-pointer hover:opacity-70"} transition text-sm md:text-[16px] capitalize`} to={link?.link}>{link?.name}</Link>
      ))}
    </div>
  )
}

export default Navbar