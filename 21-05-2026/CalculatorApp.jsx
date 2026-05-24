import { useState } from "react";

function CalculatorApp(){

    const [display, setDisplay] = useState('');
    

    return (
        <>
            <div className="text-center flex items-center justify-center flex-col m-5">
                <h1 className="font-bold text-2xl mb-2">Calculator App</h1>
                
                <div className="grid grid-cols-4 gap-2 w-72 bg-red-300 p-4 rounded-xl">
                    <h2 className="col-span-4 bg-white rounded-xl p-2 min-h-[50px]">{display}</h2>  
                    {["7","8","9","/","4","5","6","*","1","2","3","-",".","0","+"].map((item, index) => (
                        <button className="bg-white border border-black rounded-xl p-2" onClick={() => setDisplay(display + item)} key={index}>
                            {item}
                        </button>
                    ))}<br/>
                    
                    <button className="bg-white border border-black rounded-xl p-2" onClick={()=>setDisplay('')}>C</button>
                    <button className="bg-white border border-black rounded-xl p-2" onClick={()=>setDisplay(eval(display).toString())}>=</button>
                </div>
            </div>
        </>
    );
}

export default CalculatorApp;