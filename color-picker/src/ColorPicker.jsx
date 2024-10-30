import { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    return (
        <div className="flex flex-col items-center">
            <div className="m-52 text-6xl">
                Color Picker
            </div>
            <div className="w-[300px] h-[300px] p-4 flex justify-center items-center border-solid border-[5px] rounded-[25px] border-black mb-[25px] transition duration-200 ease-in" 
            style={{ backgroundColor: color }}>
                <div className= "text-2xl items-center">Selected Color: {color}</div>
            </div>
            <label className = "text-2xl font-bold mb-[10px]">Pick a color:</label>
            <input
                type="color"
                className="p-[5px] h-[50px] w-[75px] block border border-black cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700"
                id="hs-color-input"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ backgroundColor: "transparent" }} 
            />
        </div>
    );
}