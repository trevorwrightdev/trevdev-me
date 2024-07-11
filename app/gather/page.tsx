
export default function Gather() {
  return (
    <main className='flex flex-col items-center md:py-4'>
        <div className='flex flex-col gap-4 border-none w-full md:w-auto p-4 max-w-2xl'>
            <h1 className='font-bold text-xl'>Hello, my name is <span className='text-green-500'>Trevor</span> and I want to work at <span className='text-blue-500'>Gather</span>.</h1>
            <p>
                When I first used Gather while at my previous company, I remember immediately wondering,
                <span className='text-pink-500'>"Why didn't I think of this?"</span> I thought it was such a fun idea. 
            </p>
            <p>
                The product seemed like a culmination of my interests in web development and 2D games. 
                I was a bit envious that I never got to work on it!
            </p>
            <p className='text-blue-300'>I would love to work at Gather. Here are some of my skills.</p>
            <p>
                I am a full-stack web developer with most of my expertise in {' '}
                <span className='font-bold text-cyan-500'>TypeScript</span>, {' '}
                <span className='font-bold text-red-500'>React</span>, and {' '}
                <span className='font-bold text-green-500'>Node.js</span>.
                Some other technologies worth mentioning are
                Python, FastAPI, Express, Tailwind, Next.js, Firebase, Supabase, WebSockets, and Pixi.js. 
                I also have applicable experience working with spritesheets and tilesets. 
                (check out the <a href="https://store.steampowered.com/app/1634270/CHRONOPHOBIA/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>CHRONOPHOBIA</a> demo or {' '}
                <a href="https://origins.kaijukingz.io/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>Origins of STOD</a>
                )
            </p>
            <p className='text-blue-300'>
                In an attempt to better prove my skills to you, I made a project that is heavily inspired by Gather.
            </p>
            <p>
                I created a web app called {''}
                <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>realms</a>{' '}
                with Gather in mind. It has a lot of identical features. (tilemap editor, multiplayer lobbies, etc.)
                On top of this, it has a text-chat system that users can link to a Discord server.
            </p>
            <div className='w-full flex flex-col items-center gap-2'>
                <p className='text-sm text-gray-400'>Tilemap Editor</p>
                <img src='/gather1.png' className='w-full rounded-lg border-2 border-white'/>
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
                <p className='text-sm text-gray-400'>Gameplay</p>
                <img src='/gather2.png' className='w-full rounded-lg border-2 border-white'/>
            </div>
            <p>
                Feel free to try it out {' '}
                <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>here</a>
                , or you can watch a demo{' '}
                <a href="https://www.youtube.com/watch?v=fmzD44TveFI" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>here</a>.
                I specifically made it to demonstrate my skills and interest in working at Gather. I tried to use a tech stack similar to yours, it's all
                made in Node.js, React, and TypeScript.
            </p>
            <p>
                I think I would be a great fit at Gather. I have confidence in working with your tech stack and I understand the product.
                If you have any questions or would like to see more of my work, please don't hesitate to reach out.
            </p>
            <p className='text-green-500'>
                Email me at <a href='mailto:contact@trevdev.me' className='underline text-blue-500'>contact@trevdev.me</a>
            </p>
        </div>
    </main>
  )
}
