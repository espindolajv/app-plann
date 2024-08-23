'use client'

import { ListContext } from "@/contexts/ListContextProvider";
import { useShowInputListContext } from "@/contexts/ShowInputProvider";
import { Plus } from "lucide-react";
import React, { ChangeEvent, useContext, useState } from "react";

export function FormList() {
    const [inputValue, setInputValue] = useState('')
    const { handleSetList } = useContext(ListContext)
    const { handleShowInputList } = useShowInputListContext()

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        setInputValue(name)
    }

    const submitList = () => {
        handleSetList(inputValue.trim())
        handleShowInputList()
        setInputValue('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            submitList()
        }
    }

    return (
        <div className="flex items-center bg-zinc-100 rounded-md px-3 py-2 w-56 animate-fade-in">
            <div className="flex justify-between items-center gap-1">
                <input type="text" className="w-[180px] text-sm font-medium bg-transparent flex-1 outline-none" placeholder="List name" onChange={handleInput} onKeyDown={handleKeyDown}/>
                <button className="hover:bg-zinc-300 rounded-[4px] p-0.5"><Plus strokeWidth={2} className="size-4 bg-transparent text-zinc-500 duration-500" onClick={submitList} type="submit" /></button>
            </div>
        </div>
    )
}