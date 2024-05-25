import React from 'react'

export default function Thumbnail() {
  return (
  <>
    <div className="fixed hidden md:block top-0 w-full left-0 ">
      <img className="w-full dark:hidden" src="/assets/images/bg-desktop-light.jpg " alt="" />
      <img className="w-full hidden  dark:flex" src="/assets/images/bg-desktop-dark.jpg" alt="" />
    </div>

    <div className='fixed  md:hidden top-0 w-full left-0'>
      <img className="w-full dark:hidden" src="/assets/images/bg-mobile-light.jpg " alt="" />
      <img className="w-full hidden  dark:flex" src="/assets/images/bg-mobile-dark.jpg" alt="" />
    </div>
  </>
  )
}
