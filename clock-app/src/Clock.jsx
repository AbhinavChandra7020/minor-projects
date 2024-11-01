import { useEffect, useState } from "react";
import background from './assets/background.jpg'

export default function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
           setTime(new Date()); 
        },1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)} ${meridiem}`;
    }

    function fixZero(number){
        return (number < 10 ? "0": "") + number;
    }

    return (
        <div 
            className="bg-cover bg-center h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url(${background})`
            }}
        >
            <div className="text-center bg-gradient-to-r from-orange-500 text-transparent bg-clip-text to-orange-100 font-bold text-8xl font-mono drop-shadow-xl ">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
