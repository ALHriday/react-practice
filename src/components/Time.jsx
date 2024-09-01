import { useEffect, useRef } from "react"

const Time = () => {

    const hours = useRef();
    const minutes = useRef();
    const seconds = useRef();
    const ampm = useRef();

    useEffect(() => {
        function updateTime() {
            let time = new Date();
            let hour = time.getHours();
            let minute = time.getMinutes();
            let second = time.getSeconds();

            let amPm = hour > 12 ? "PM" : "AM";

            let h = hour > 12 ? hour % 12 : hour
            let hs = h < 10 ? "0" + h : h;

            let m = minute < 10 ? "0" + minute : minute;
            let s = second < 10 ? "0" + second : second;
    
            hours.current.innerHTML = hs;
            minutes.current.innerHTML = m;
            seconds.current.innerHTML = s;
            ampm.current.innerHTML = amPm;
        }
        setInterval(updateTime, 1000);
    }, []);

    return (
        <div className="flex justify-end items-center gap-4 p-3 border-b-2 relative">
            <h1 ref={hours} className="p-4 bg-green-400 text-4xl font-bold rounded-2xl"></h1> 
           <h1 ref={minutes} className="p-4 bg-orange-400 text-4xl font-bold rounded-2xl"></h1> 
           <h1 ref={seconds} className="p-4 mr-5 bg-yellow-400 text-4xl font-bold rounded-2xl"></h1> 
           <h1 ref={ampm} className="p-2  bg-red-500 text-md absolute top-0.5 right-1.5 font-bold rounded-full text-white"></h1>
        </div>
    )
}

export default Time