'use client'

import { useShowInpuWorktContext } from "@/contexts/ShowInputProvider";
import { useWorkContext } from "@/contexts/WorkContextProvider";
import { Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";

export function FormWorkspace() {
    const [inputValue, setInputValue] = useState('')
    const [colorValue, setColorValue] = useState('red')
    const { handleSetWork } = useWorkContext()
    const { handleShowInputWork } = useShowInpuWorktContext()

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        setInputValue(name)
    }

    const handleInputColor = (event: ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value
        setColorValue(color)
    }

    const submitList = () => {
        handleSetWork(inputValue.trim(), colorValue.toLowerCase())
        handleShowInputWork()
        setInputValue('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            submitList()
        }
    }

    return (
        <div className="flex items-center bg-zinc-100 rounded-md px-3 py-2 w-56">
            <div className="flex justify-between items-center">
                <input type="text" className="w-[110px] text-sm font-medium bg-transparent flex-1 outline-none" placeholder="Workspace" onChange={handleInput} onKeyDown={handleKeyDown} required/>
                <div className="bg-zinc-200 w-0.5 h-4 mx-2"></div>
                <input type="" className="w-[50px] text-sm font-medium bg-transparent flex-1 outline-none" placeholder="Color" onChange={handleInputColor} onKeyDown={handleKeyDown} required/>
                <button className="hover:bg-zinc-300 rounded-[4px] p-0.5"><Plus strokeWidth={2} className="size-4 bg-transparent text-zinc-500 duration-500" onClick={submitList}/></button>
            </div>
        </div>
    )
}