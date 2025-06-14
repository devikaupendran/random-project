import React from 'react'
import { assets } from '../assets/assets'

const Innovation = () => {
    return (
        <div className=' w-full xl:h-100 xl:mx-auto my-[250px]'>
            <div className='flex xl:flex-row flex-col justify-between items-center xl:h-[400px] gap-15 xl:gap-0'>
                
                {/* -------------- section 1 -------------- */}
                <div className='flex flex-col mx-[4%] xl:w-[50%]  gap-3 justify-center'>
                    <h1 className='max-w-[600px] text-[30px] font-semibold'>What if the right innovation partner  could tranform the way you do bussiness?</h1>

                    {/* Orange accent bar */}
                    <div className="bg-[#ED4718] h-[4px] w-[200px] my-3 xl:my-0"></div>

                    <div className='xl:h-[400px] flex flex-col gap-5 text-justify leading-[30px] mt-4 max-w-prose '>
                        <p>In a world where technology evolves daily, staying ahead means more than just keeping  up it means leading the change.</p>
                        <p>At Tricta Technologies, we don’t just provide IT solutions; we craft digital strategies that challenge the status quo, drive innovation, and empower your business to thrive in a connected future. Let’s explore what’s possible together.</p>
                    </div>
                </div>

                {/* -------------- section 2 -------------- */}
                <div className='xl:w-[40%] w-[50%] md:h-[300px] lg:h-[500px] xl:h-[400px]'>
                    <img src={assets.innovation} alt="innovation image" className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Innovation;