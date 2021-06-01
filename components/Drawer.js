// import React from 'react'
import classnames from "classnames"
import Link from "next/link"
import { XIcon } from '@heroicons/react/outline'
import navLinks from "../navLinks"
export default function Drawer({ open }) {
    return (
        <div className={classnames("w-60 h-screen bg-sidenav absolute transition duration-500 ease-in-out", {
            "left-0": open === true,
            "-left-60": open === false
        })}>
            <ul className="">
                {navLinks.map((item, index) => (
                    <li key={index} className="ml-10 mt-3 hover:text-red-500">
                        <Link href={item.path}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}