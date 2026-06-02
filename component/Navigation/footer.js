import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/6 bg-black py-10 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="orbitron text-2xl text-white">SHAURYA.DEV</div>
            <p className="mt-3 font-terminal text-sm text-zinc-400">Building the future, one line at a time.</p>
          </div>

          <div className="hidden md:block">
            <div className="font-terminal text-xs uppercase tracking-[0.45em] text-zinc-400">Quick Access</div>
            <ul className="mt-4 space-y-3">
              <li><a className="font-terminal text-sm text-zinc-300 hover:text-white" href="/">Projects</a></li>
              <li><a className="font-terminal text-sm text-zinc-300 hover:text-white" href="/blog">Blog</a></li>
              <li><a className="font-terminal text-sm text-zinc-300 hover:text-white" href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-terminal text-xs uppercase tracking-[0.45em] text-zinc-400">System Status</div>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(56,189,248,0.06)]" />
              <div className="font-terminal text-sm text-zinc-200">All systems operational</div>
            </div>

            <div className="mt-4 font-terminal text-sm text-zinc-400">
              © 2026 SHAURYA.DEV
              <div className="mt-2">Version 2.4.1</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center font-terminal text-xs text-zinc-500">Made with care • Contact for collaborations</div>
      </div>
    </footer>
  )
}

export default Footer