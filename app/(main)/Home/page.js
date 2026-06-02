import React from 'react'

const HomePage = () => {
    return (
        <div className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 text-center">
            <div className="hero flex flex-col items-center gap-6 text-center">
                <p className="animate-fade-up font-terminal font-light uppercase tracking-[0.5em] text-zinc-500 [animation-delay:120ms] [animation-fill-mode:both]">
                    SYSTEM ONLINE // STATUS: ACTIVE
                </p>
                <div className="orbitron select-none text-[clamp(4.3rem,8vw,8rem)] font-black uppercase leading-[0.88] tracking-[0.01em]">
                    <p className="animate-rise-in [animation-delay:220ms] [animation-fill-mode:both]">FULL STACK</p>
                    <p className="animate-rise-in relative mt-2 inline-flex flex-col items-center [animation-delay:320ms] [animation-fill-mode:both]">
                        <span className="border-b-4 border-white/75  pb-2">DEVELOPER</span>
                    </p>
                </div>
                <div className="font-terminal flex max-w-2xl items-center justify-center gap-1 text-balance text-center text-[clamp(1rem,1.2vw,1.35rem)] leading-relaxed text-zinc-300 [animation-delay:420ms] [animation-fill-mode:both] animate-fade-up">
                    <span>Building digital expieriences, systems, and interactive interfaces.</span>
                    <span className="inline-flex h-6 items-end text-white/70 animate-cursor-blink">|</span>
                </div>
                <div className="buttons flex flex-col gap-4 pt-4 sm:flex-row sm:gap-5 animate-fade-up [animation-delay:520ms] [animation-fill-mode:both]">
                    <button className="border border-white bg-white px-8 py-4 font-terminal text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-white transition duration-300 ease-in-out hover:translate-y-[-1px] hover:border-zinc-200 hover:shadow-xs">
                        VIEW PROJECTS
                    </button>
                    <button className="border border-white/15 bg-transparent px-8 py-4 font-terminal text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 ease-in-out hover:translate-y-[-1px] hover:border-white/35 hover:bg-white/5">
                        DOWNLOAD RESUME
                    </button>
                </div>
            </div>
            <div className="arrow absolute bottom-10 left-1/2 flex -translate-x-1/2 justify-center animate-fade-up [animation-delay:640ms] [animation-fill-mode:both]">
                <span className="text-2xl text-white/45 animate-bounce-gentle">⌄</span>
            </div>
        </div>
    )
}

export default HomePage