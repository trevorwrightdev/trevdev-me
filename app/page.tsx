export default function Home() {
  return (
    <main className='flex flex-col gap-4'>
        <img src='/image.png' className='w-full' style={{imageRendering: 'pixelated'}}/>
        <div className='p-4 flex flex-col gap-2'>
            <h1 className='text-3xl text-slate-400'>trevdev</h1>
            <p>software engineer and game developer.</p>
            <p>got a lot of ideas, hoping that i can get some out of my head.</p>
            <div className='h-[1px] w-full bg-slate-400'/>
            <h1 className='text-3xl text-slate-400'>blog</h1>
            <p>coming soon.</p>
            <div className='h-[1px] w-full bg-slate-400'/>
            <h1 className='text-3xl text-slate-400'>projects</h1>
            {/* anchor tag open in new tab */}
            <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='hover:underline max-w-max'>realms</a>
            <div className='h-[1px] w-full bg-slate-400'/>
            <h1 className='text-3xl text-slate-400'>contact</h1>
            
        </div>
    </main>
  )
}
