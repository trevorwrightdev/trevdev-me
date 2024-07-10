
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
            <p className='text-blue-300'>I would love to work at Gather. Here's my pitch.</p>
            <p>
                I have created a web app called {''}
                <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>realms</a>{' '}
                with Gather in mind. It is heavily inspired by Gather and has a lot of identical features. (tilemap editor, multiplayer lobbies, etc.)
                It also has a text-chat system that users can link to a Discord server.
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
                Feel free to make an account and try it out, or you can watch a demo{' '}
                <a href="https://www.realms.so/" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>here</a>.
                I specifically made it to show off my skills and interest in working at Gather. I tried to use a tech stack similar to yours. It was made
                with {' '}
                <span className='font-bold text-cyan-500'>TypeScript</span>, {' '}
                <span className='font-bold text-red-500'>React</span>, and {' '}
                <span className='font-bold text-green-500'>Node.js</span>.
            </p>
            <p>
                
            </p>
        </div>
    </main>
  )
}
