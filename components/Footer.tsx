'use client';
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-8 mt-10">
        <div className='flex flex-col items-center gap-6'>
            <h3 className='text-[30px] font-bold'>Not finding the help you need?</h3>
            <Button className='bg-blue-400 hover:bg-blue-400 hover:shadow-lg cursor-pointer'>
                Contact Us
            </Button>
        </div>
        <div className='mt-20 pt-8'>
            <div className='mt-8 pt-8 border-t text-center text-sm text-gray-600'>
                <p>© {currentYear} KovaiBase. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer