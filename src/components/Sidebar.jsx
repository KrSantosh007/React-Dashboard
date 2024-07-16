import React from 'react'
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='bg-[#df3475] h-screen px-[25px]'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-[rgb(255,255,255)] text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
            </div>

            <div className='flex items-center gap-4 py-5 border-b border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt color='#fff'/>
                <p className='text-[#fff] text-[14px] leading-5 font-bold'>Dashboard</p>
            </div>

            <div className='pt-[15px] border-b border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-4 text-[#ebdddd]'>INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='#fff'/>
                        <p className='text-[14px] leading-5 font-normal text-[#fff]'>Pages</p>
                    </div>
                    <FaChevronRight color='#fff'/>
                </div>

                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='#fff'/>
                        <p className='text-[14px] leading-5 font-normal text-[#fff]'>Charts</p>
                    </div>
                    <FaChevronRight color='#fff'/>
                </div>
            </div>

            <div className='pt-[15px] border-b border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-4 text-[#ebdddd]'>ADDONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='#fff'/>
                        <p className='text-[14px] leading-5 font-normal text-[#fff]'>Components</p>
                    </div>
                    <FaChevronRight color='#fff'/>
                </div>

                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='#fff'/>
                        <p className='text-[14px] leading-5 font-normal text-[#fff]'>Utilities</p>
                    </div>
                    <FaChevronRight color='#fff'/>
                </div>
                <div className='flex items-center gap-[10px] py-[15px]'>
                    <FaRegCalendarAlt color='#fff'/>
                    <p className='text-[14px] leading-5 font-normal text-[#fff]'>Tables</p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[40px] w-[40px] bg-[#023b5b] rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft color='#fff'/>
                </div>
            </div>

            <div className='bg-[#368bda] mt-[15px]'></div>
        </div>
    )
}

export default Sidebar
