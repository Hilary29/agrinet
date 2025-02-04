import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='flex flex-col gap-8 py-auto bg-white-50 p-4 w-4xl mx-[40%] rounded-lg py-16'>
            <div className='text-center py-2.5 px-4 font-semibold text-paragraph-lg font-satoshi'>Verify your Email</div>
            <Link href={'/signin'} className='bg-primary-600 text-center font-semibold text-white-50   font-inter text-paragraph-md rounded-md py-2.5 px-4 sm:text-lg transition-colors duration-300 hover:bg-primary-700'>Go to Signin</Link>

        </div>
      
    </div>
  )
}

export default page
