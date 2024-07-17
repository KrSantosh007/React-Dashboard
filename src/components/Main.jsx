import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa'
import React from 'react';

import PieComponent from './PieComponent';
import LineComponent from './LineComponent';
import ProgressBar from './ProgressBar';
import err from '../assets/error.png';



const Main = () => {
    return (
        <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#df3475] text-[28px] leading-[34px] font-semibold cursor-pointer'>Dashboard</h1>
                <button className='bg-[#df3475] h-[32px] rounded-[3px] text-[#fff] flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
            </div>

            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className='h-[100px] rounded-[8px] bg-[#fff] border-l-[4px] border-[#df3475] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
                </div>

                <div className='h-[100px] rounded-[8px] bg-[#fff] border-l-[4px] border-[#3ac093] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUAL)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
                </div>

                <div className='h-[100px] rounded-[8px] bg-[#fff] border-l-[4px] border-[#3db4ca] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>TASKS</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
                </div>

                <div className='h-[100px] rounded-[8px] bg-[#fff] border-l-[4px] border-[#efc459] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>PENDING REQUEST</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
                </div>
            </div>

            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] border bg-[#fff] shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2>Earnings Overviews</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div>
                        <LineComponent/>
                    </div>
                </div>

                <div className='basis-[30%] border bg-[#fff] shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2>Revenue Resources</h2>
                        <FaEllipsisV color='gray' className='coursor-pointer' />
                    </div>
                    <div className='pl-[35px]'>
                        <PieComponent/>
                    </div>
                </div>
            </div> 

            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-[#fff] shadow-md cursor-pointer rounded-[4px]'>                    
                    <ProgressBar />
                </div>
                <div className='basis-[45%] border bg-[#fff] shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Resources</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px] flex items-center justify-center h-[100%]'>
                        <div>
                            <img src={err} alt='error' height={200} width={200} />
                            <p className='mt-[15px] font-semibold text-gray-500'>No data available</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Main
