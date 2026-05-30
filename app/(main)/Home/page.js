import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div className="hero flex flex-col gap-5 justify-center items-center mt-32">
                <p className="font-terminal font-light uppercase tracking-[0.5em] text-zinc-500">
                    SYSTEM ONLINE // STATUS: ACTIVE
                </p>
                <div className="orbitron text-8xl font-black uppercase">
                    <p>FULL STACK</p>
                    <p className="underline">DEVELOPER</p>
                </div>
                <div className="font-terminal w-xl text-center text-xl ">
                    Building digital expieriences, systems, and interactive interfaces.
                </div>
                <div className="buttons flex gap-9">
                    <button className="p-6 m-2 border bg-white text-black border-zinc-500 hover:shadow-xs hover:border-white shadow-white cursor-pointer transition duration-300 ease-in-out">VIEW PROJECTS</button>
                    <button className="p-6 m-2 border border-zinc-500 hover:shadow-xs hover:border-white shadow-white cursor-pointer transition duration-300 ease-in-out">DOWNLOAD RESUME</button>
                </div>
            </div>
            <div className="arrow">
                
            </div>
        </div>
    )
}

export default HomePage