import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='p-4'>
            <h1 className='text-teal-400 text-5xl sm:text-6xl md:text-8xl font-bold text-center'>Simple Counter</h1>
            <div className="my-4 flex justify-center items-center gap-4">
                <button className='my-4 px-6 py-4 w-24 md:w-40 h-20 bg-sky-500 hover:bg-sky-600 text-4xl font-bold rounded-2xl' onClick={() => setCount((count) => count - 1)}>-</button>
                <h1 className='bg-sky-500 px-6 py-4 w-24 md:w-40 h-20 rounded-2xl text-4xl font-bold text-center'>{count}</h1>
                <button className='px-6 py-4 w-24 md:w-40 h-20 bg-sky-500 hover:bg-sky-600 text-4xl font-bold rounded-2xl' onClick={() => setCount((count) => count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
