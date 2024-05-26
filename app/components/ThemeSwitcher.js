"use client"
import React, { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isLight, setIsLight] = useState(() => {
    const storedTheme = window.localStorage.getItem('prefered-theme');
    return storedTheme !== 'darkTheme';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
        console.log(window.innerWidth);
    }
  }, []);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem('prefered-theme', 'lightTheme');
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem('prefered-theme', 'darkTheme');
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('prefered-theme');
    const root = window.document.documentElement;
    if (storedTheme === 'darkTheme') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    console.log(`${storedTheme} selected`);
  }, [isLight]);

  return (
    <div className='theme-switcher items-center ml-12'>
      <button
        type='button'
        className={`dark-mode-switch cursor-pointer mr-6 w-[40px] h-[40px] p-[10px] ${isLight ? '' : 'hidden'}`}
        onClick={setDarkTheme}
      >
        <img src="/assets/images/icon-moon.svg" alt="" />
      </button>
      <button
        type='button'
        className={`light-mode-switch cursor-pointer mr-6 w-[40px] h-[40px] p-[10px] ${isLight ? 'hidden' : ''}`}
        onClick={setLightTheme}
      >
        <img src="/assets/images/icon-sun.svg" alt="" />
      </button>
    </div>
  );
}
