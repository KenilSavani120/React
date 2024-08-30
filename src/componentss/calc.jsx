import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract, multiply, divide, clear } from "./actions"

function Calc() {
    const [input, setInput] = useState('');
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleOperation = (operation) => {
        const number = parseFloat(input);
        if (!isNaN(number)) {
            switch (operation) {
                case 'add':
                    dispatch(add(number));
                    break;
                case 'subtract':
                    dispatch(subtract(number));
                    break;
                case 'multiply':
                    dispatch(multiply(number));
                    break;
                case 'divide':
                    dispatch(divide(number));
                    break;
                default:
                    break;
            }
            setInput('');
        }
    };

    return (
        <div className="flex flex-col bg-pink-blue-gradient items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Calculator</h1>
                <input 
                    type="number" 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Enter a number" 
                    className="w-full px-4 py-2 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <button onClick={() => handleOperation('add')} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">Add</button>
                    <button onClick={() => handleOperation('subtract')} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">Subtract</button>
                    <button onClick={() => handleOperation('multiply')} className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300">Multiply</button>
                    <button onClick={() => handleOperation('divide')} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">Divide</button>
                </div>
                <button onClick={() => dispatch(clear())} className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300">Clear</button>
                <h2 className="mt-6 text-2xl font-semibold text-center text-gray-800">Result: {result}</h2>
            </div>
        </div>
    );
}

export default Calc;