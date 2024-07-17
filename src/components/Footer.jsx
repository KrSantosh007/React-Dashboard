import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="rounded-lg shadow-lg m-4 border-[#df3475] border-l-[4px] dark:bg-[#023b5b] mb-2 mx-[25px]">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-[#fff] sm:text-center dark:text-[#fff]">© 2024 <Link to={'/'} className="hover:underline">JM-Jain™</Link>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#fff] dark:text-[#fff] sm:mt-0">
                        <li>
                            <Link to={'/'} className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
