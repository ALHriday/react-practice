
const Navbar = () => {
    return (
        <div className='bg-sky-600 text-white flex justify-between items-center p-2'>
            <h1 className='text-4xl font-bold pl-4'>LoGo</h1>
            <ul className='hidden md:flex'>
                <li className='py-2 px-3 cursor-pointer rounded-md text-xl hover:bg-red-500'>Home</li>
                <li className='py-2 px-3 cursor-pointer rounded-md text-xl hover:bg-red-500'>Service</li>
                <li className='py-2 px-3 cursor-pointer rounded-md text-xl hover:bg-red-500'>Contact</li>
                <li className='py-2 px-3 cursor-pointer rounded-md text-xl hover:bg-red-500'>About</li>
            </ul>
            <div className="p-2 flex md:hidden flex-col gap-1 cursor-pointer rounded-md bg-slate-800">
                <span className="w-7 bg-white h-1"></span>
                <span className="w-7 bg-white h-1"></span>
                <span className="w-7 bg-white h-1"></span>
            </div>
        </div>
    )
}

export default Navbar