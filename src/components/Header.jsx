import React, { useState, useEffect } from 'react'

function Header() {
  // Initialize dark mode based on persisted value in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  // Update dark mode preference in localStorage and toggle the dark class on the root document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', darkMode)
    }
  }, [darkMode])

  const handleDarkModeToggle = () => setDarkMode(!darkMode)

  return (
    <header
      className={`w-full p-4 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md fixed top-0 z-50 transition-colors duration-300`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <a href='/' className='text-xl font-bold'>
          My Personal Website
        </a>
        <nav className='flex space-x-4'>
          <a
            href='#about'
            className='hover:text-blue-500 transition-colors duration-200'
          >
            About
          </a>
          <a
            href='#portfolio'
            className='hover:text-blue-500 transition-colors duration-200'
          >
            Portfolio
          </a>
          <a
            href='#contact'
            className='hover:text-blue-500 transition-colors duration-200'
          >
            Contact
          </a>
        </nav>
        <button
          onClick={handleDarkModeToggle}
          className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
