import React from 'react'
import CommonCards from './CommonCards'
import CommonCards2 from './CommonCards2';

function CommonRows() {
    return (
        <div className='grid lg:grid-cols-4 lg:grid-rows-2 gap-2 w-[76%] h-full md:w-full mac:grid-cols-2 mac:grid-rows-2 md:grid-cols-8 md:grid-rows-2  grid-cols-1 grid-rows-5 '>
            <div className='flex gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex sm:flex-row-reverse gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex md:flex-row-reverse mac:flex-row-reverse gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex sm:flex-row-reverse md:flex-row-reverse mac:flex-row-reverse gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex lg:flex-row-reverse sm:flex gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex lg:flex-row-reverse sm:flex-row-reverse gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex lg:flex-row-reverse md:flex-row-reverse mac:flex-row-reverse  gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
            <div className='flex lg:flex-row-reverse md:flex-row-reverse mac:flex-row-reverse sm:flex-row-reverse gap-2'>
                <CommonCards />
                <CommonCards2 />
            </div>
        </div>
    )
}

export default CommonRows