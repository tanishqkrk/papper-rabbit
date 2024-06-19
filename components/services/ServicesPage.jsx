import React from 'react'
import ServicesContent from './ServicesContent'
import ServicesContentReverse from './ServicesContentReverse'
import BackBar from '../back/BackBar'


function ServicesPage({ data }) {
    const [name1, name2] = data
    return (
        <div className='flex flex-col relative mt-[52px] z-10 '>
            <BackBar name ='Services' />
            <div className=' flex flex-col items-center justify-center gap-20 w-full h-full mt-10' >
                <ServicesContent name={name1} key={1} />
                <ServicesContentReverse name={name2} key={2} />
                <ServicesContent />
                <ServicesContentReverse />
                <ServicesContent />
                <ServicesContentReverse />
                <ServicesContent />
                <ServicesContentReverse />
            </div>
        </div>
    )
}

export default ServicesPage


