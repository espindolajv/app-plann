'use client'

import React from 'react'
import { ListContext } from "@/contexts/ListContextProvider"
import { useContext, useState } from "react"
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ToggleButton } from "@/components/ToggleButton";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { NotFound } from '@/components/NotFound'

dayjs.extend(localizedFormat)

interface ContentProps {
    id: string
}

export function Dashboard({ id }: ContentProps) {
    const { list } = useContext(ListContext)
    const [open, setOpen] = useState(false)

    const findList = (id: string) => {
        const element = list.find(item => item.id === id)

        return element
    }

    const element = findList(id)

    return (
        <div>
            {element ?
                <div className="w-full flex gap-5 h-full animate-fade-in">
                    <div className="flex flex-col gap-10 flex-1 px-12 py-10">

                        <div>
                            <h2 className="text-2xl font-semibold">{element?.name}</h2>
                            <h3 className="text-base text-zinc-500">{dayjs(element?.date).format('LLL')}</h3>
                        </div>

                        <div>
                            <p></p>
                        </div>

                        <div>
                            <button
                                className="w-full flex gap-3 border-dashed border-2 border-zinc-200 rounded-md px-4 py-2 items-center hover:bg-zinc-200 duration-500"
                                onClick={() => setOpen(true)}
                            >
                                <Plus className="text-zinc-400 size-5" />

                                <h3 className="font-medium">New task</h3>
                            </button>
                        </div>

                    </div>

                    {open &&
                        <div className="flex flex-col justify-center p-5 border-2 absolute w-[400px] bg-zinc-50 right-4 top-4 rounded-xl animate-fade-in">
                            <div className="flex flex-col gap-5 flex-1">
                                <div className='flex justify-between'>
                                    <h3 className="font-medium text-sm"><span className="text-zinc-400 text-sm  ">{element?.name} / </span>New task</h3>
                                    <button
                                        className='flex justify-end'
                                        onClick={() => setOpen(false)}
                                    >
                                        <X className='text-zinc-400 hover:text-zinc-800 duration-300' />
                                    </button>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        placeholder="Task name"
                                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm"
                                    />

                                    <textarea
                                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm resize-none h-40"
                                        placeholder="Description"
                                    />

                                    <ToggleButton />

                                    <button
                                        className='bg-green-200 w-full px-4 py-2 text-green-800 font-semibold rounded-md hover:bg-green-600 hover:text-zinc-50 duration-300'
                                    >
                                        Add Task
                                    </button>
                                </div>

                            </div>
                        </div>
                    }
                </div>
                :
                    <NotFound />
            }
        </div>
    )
}