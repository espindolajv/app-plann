import { useState } from "react"

export function ToggleButton() {
    const [select, setSelect] = useState('')

    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelect(event.currentTarget.value)
    }

    return (
        <div>
            <div className="border-2 rounded-md flex justify-center items-center p-1 gap-1">
                <button
                    className={`flex-1 py-1 text-sm rounded-md ${select == 'low' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                    value='low'
                    onClick={handleSelect}
                >
                    Low
                </button>
                <div className="h-6 w-0.5 bg-zinc-300"></div>
                <button
                    className={`flex-1 py-1 text-sm rounded-md ${select == 'medium' ? 'bg-yellow-500 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                    value='medium'
                    onClick={handleSelect}
                >
                    Medium
                </button>
                <div className="h-6 w-0.5 bg-zinc-300"></div>
                <button
                    className={`flex-1 py-1 text-sm rounded-md ${select == 'high' ? 'bg-red-600 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                    value='high'
                    onClick={handleSelect}
                >
                    High
                </button>
            </div>
        </div>
    )
}