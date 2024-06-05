"use client";
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ breadcumr1, breadcumr1_link, breadcumr2 }) => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:flex p-4">
                    <div>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link
                                        to="/"
                                        className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="mr-4 h-4 w-4"
                                        >
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <Link to={breadcumr1_link} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                            {breadcumr1}
                                        </Link>
                                    </div>
                                </li>
                                {
                                    (breadcumr2 && breadcumr2 != "") ?
                                        <li>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="h-4 w-4"
                                                >
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                                <label className="ml-1 text-sm font-medium text-gray-800 md:ml-2">
                                                    {breadcumr2}
                                                </label>
                                            </div>
                                        </li>
                                        : ""
                                }

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs;