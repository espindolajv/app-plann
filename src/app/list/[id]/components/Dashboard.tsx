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
import { NewTask } from './NewTask'

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

    console.log(element)

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
                        <div>
                            {element.tasks.map(item => (
                                <div key={item.id}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.priority}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {open &&
                        <NewTask setOpen={setOpen} elementName={element?.name} id={element.id}/>
                    }
                </div>
                :
                <NotFound />
            }
        </div>
    )
}