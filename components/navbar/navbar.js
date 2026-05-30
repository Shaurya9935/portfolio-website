import React from 'react'

const navbar = () => {
  return (
    <div className="flex justify-around m-5" >
        <div className="logo orbitron font-bold text-2xl uppercase">
            SHAURYA.DEV
        </div>
        <div className="navigations">
            <ul className="flex gap-8 ">
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">Home</li>
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">About</li>
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">Skills</li>
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">Project</li>
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">Blog</li>
                <li className="cursor-pointer text-zinc-500 hover:text-white font-terminal transition duration-300 ease-in-out">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default navbar