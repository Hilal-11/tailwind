import React from 'react'
function HeroComponent() {
  return (
    <div className='px-4 py-2 flex items-center flex-col w-full my-20 h-auto'>
        <button className='px-8 py-[3px] border border-neutral-200 bg-neutral-100 text-neutral-600 hover:bg-orange-500 transition-colors duration-200 cursor-pointer rounded-full flex items-center text-sm'>
            Incorporation common mistakes to avoid
        </button>

        <div className='flex flex-col items-center py-10 md:w-2/3 md:px-10 px-5 justify-center text-center'>
            <h1 className='md:text-6xl text-6xl text-neutral-800 font-medium md:font-bold tracking-wide'>Magically simplify accounting and taxes</h1>
            <p className='py-8 text-lg text-neutral-800 font-semibold'>Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 10:19pm.</p>
            <div className='flex gap-2'>
                <button className='bg-[#2579f3] px-4 text-white py-[7px] font-medium rounded-lg shadow-lg text-shadow-md tracking-wide'>Get started</button>
                <button className='bg-none hover:bg-neutral-200 px-4 text-black font-medium py-[7px] rounded-lg hover:shadow-lg text-shadow-md tracking-wide'>Pricing</button>
            </div>
            <p className='text-[11px] text-gray-500 my-4 tracking-wide'>Currently for US-based Delaware C-Corps.</p>
        </div>
    </div>
  )
}

export default HeroComponent