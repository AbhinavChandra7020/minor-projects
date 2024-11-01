import { useEffect, useRef, useState } from "react";

export default function Stopwatch(){
    
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () =>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop(){
        setIsRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")


        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className="flex flex-col items-center border-2 border-solid border-black p-[30px] rounded-[50px] mt-2">
            <div className="text-7xl font-mono  mb-8 drop-shadow-[2px_2px_rgba(0,0,0,0.35)]">
                {formatTime()}
            </div>
            <div className="">
                <button
                    type="button"
                    className="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                    onClick={start}>
                    Start
                </button>


                <button
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                    onClick={stop}>
                    Stop
                </button>

                <button
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                    onClick={reset}>
                    Reset
                </button>

            </div>
        </div>
    )
}