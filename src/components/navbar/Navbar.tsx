'use client'

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
// import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Explorer",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Pools",
    url: "/blog",
  },
  {
    id: 4,
    title: "Catalyst",
    url: "/about",
  },
  {
    id: 5,
    title: "Community",
    url: "/contact",
  },
  {
    id: 6,
    title: "History",
    url: "/dashboard",
  },
  {
    id: 7,
    title: "Dictionary",
    url: "/Dictionary"
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <img src="/logo.png" alt="logo"/>
      </Link>
      <div className={styles.links}>
        {/* <DarkModeToggle/> */}
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button 
          className={styles.logout}
          onClick={()=>{console.log("logged out")}}>Login</button>
        
      </div>
    </div>
  )
}

export default Navbar