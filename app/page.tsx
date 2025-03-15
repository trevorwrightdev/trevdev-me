'use client'
import { GithubLogo, XLogo, YoutubeLogo, TwitchLogo } from '@phosphor-icons/react'

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
        <div className='flex flex-col w-full md:w-[600px] md:pt-32'>
            <section className='flex flex-col gap-8 md:flex-row md:p-4'>
                <img src='/image.png' className='w-full md:w-48' style={{imageRendering: 'pixelated'}}/>
                <div className='flex flex-col gap-2 justify-center pl-4'>
                    <h1 className='text-3xl text-slate-400'>trevdev</h1>
                    <p>software engineer and game developer</p>
                </div>
            </section>
            <div className='p-4 flex flex-col gap-2'>
                <div className='h-[1px] w-full bg-slate-400'/>
                <h1 className='text-2xl text-slate-400'>about</h1>
                <p>
                    I'm Trevor, a software engineer in Southern California. 
                    I usually work on full-stack web apps, but I also do some game development here and there. 
                    I'm good at TypeScript, React, Next.js, {' '}
                    <a href="https://pixijs.com/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-[#E72264]'>Pixi.js</a>, and a lot more. 
                </p>
                <div className='h-[1px] w-full bg-slate-400'/>
                <h1 className='text-2xl text-slate-400'>work</h1>
                <section className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <a href="https://lofi.town/" target="_blank" rel="noopener noreferrer" className='text-[#E1E995] underline'>lofi.town</a>
                        <p className='text-xs'>Co-Founder & CTO</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <p className='text-yellow-500'>Augminted Labs</p>/
                            <a href="https://origins.kaijukingz.io/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-red-500'>Kaiju Kingz</a>
                        </div>
                        <p className='text-xs'>Full-Stack Software Engineer</p>
                    </div>
                    
                </section>
                <div className='h-[1px] w-full bg-slate-400'/>
                <h1 className='text-2xl text-slate-400'>projects</h1>
                <a href="https://lofi.town/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-[#E1E995]'>lofi.town</a>
                <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-green-400'>realms</a>
                <a href="https://gather.trevdev.me/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-blue-500'>gather.town clone</a>
                <a href="https://trevdev-project-z.vercel.app/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-red-600'>project z</a>
                <a href="https://store.steampowered.com/app/1634270/CHRONOPHOBIA/" target="_blank" rel="noopener noreferrer" className='underline max-w-max text-white'>CHRONOPHOBIA</a>
                <div className='h-[1px] w-full bg-slate-400'/>
                <h1 className='text-2xl text-slate-400'>contact</h1>
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <a href="https://www.twitch.tv/trevdev__" target="_blank" rel="noopener noreferrer">
                            <TwitchLogo className='h-8 w-8 cursor-pointer hover:text-zinc-500'/>
                        </a>
                        <a href="https://github.com/trevorwrightdev" target="_blank" rel="noopener noreferrer">
                            <GithubLogo className='h-8 w-8 cursor-pointer hover:text-zinc-500'/>
                        </a>
                        <a href="https://x.com/trevdev__" target="_blank" rel="noopener noreferrer">
                            <XLogo className='h-8 w-8 cursor-pointer hover:text-zinc-500'/>
                        </a>
                    </div>
                    <p>or email me at <a href='mailto:contact@trevdev.me' className='underline text-slate-400'>contact@trevdev.me</a></p>
                </div>
            </div>
        </div>
    </main>
  )
}