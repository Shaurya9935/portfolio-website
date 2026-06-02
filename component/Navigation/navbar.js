import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 backdrop-blur-sm bg-black/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="logo orbitron font-bold text-2xl uppercase text-white">SHAURYA.DEV</div>
          <nav>
            <ul className="hidden md:flex gap-8">
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">Home</li>
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">About</li>
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">Skills</li>
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">Projects</li>
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">Blog</li>
              <li className="cursor-pointer text-zinc-400 hover:text-white font-terminal transition duration-300 ease-in-out">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar