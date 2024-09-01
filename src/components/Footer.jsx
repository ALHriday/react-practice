

const Footer = () => {
    return (
        <div className="md:grid md:grid-cols-4 md:items-center flex flex-col md:flex-row md:justify-evenly gap-6 text-white p-4 bg-black">
            <div className="col-span-3">
                <h1 className="text-5xl font-bold mb-4">LoGo</h1>
                <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet. Cupiditate, inventore.</p>
            </div>
            <div className="col-span-1">
                <ul className="flex flex-col md:justify-center md:items-center gap-3 md:gap-3">
                    <li className="text-2xl font-bold">Get Started</li>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="p-4 bg-slate-900 col-span-4">
                <p className="text-2xl text-center">© All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer