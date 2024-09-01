
const Cards = () => {
    return (
        <div className="flex mb-12 flex-col md:flex-row gap-4 p-4 bg-sky-500 w-5/6 rounded-md mx-auto">
            <div className="w-ful md:w-4/6 flex flex-col gap-2 order-2">
                <h1 className="text-4xl font-bold">Card Title</h1>
                <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, aspernatur ex! Obcaecati tempora autem quo asperiores nihil! Possimus, vel libero.</p>
            </div>
            <div className="w-full md:w-2/6 order-1">
                <img className="rounded-md" src="../../public/images/laptop.jpg" alt="HP-Laptop" />
            </div>
        </div>
    )
}

export default Cards