import React from 'react'
import { ListContext } from "@/contexts/ListContextProvider"
import { useContext, useState } from "react"
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Plus, X } from "lucide-react";
import { NotFound } from '@/components/NotFound'
import { NewTask } from './NewTask'
import { Task } from './Task';

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
                <div className="w-full flex gap-5 h-screen animate-fade-in">
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
                        <div className='flex-1'>
                            {element.tasks.length ? (
                                (
                                    element.tasks.map(item => (
                                        <Task task={item} key={item.id} />
                                    ))
                                )
                            ) :
                                <div className='flex flex-col h-full justify-center items-center gap-1'>
                                    <h2 className='font-semibold text-2xl text-zinc-800'>You don`t have any tasks aqui</h2>
                                    <p className='font-medium text-xs text-zinc-500'>Start creating items by clicking on `Create new task`</p>
                                </div>}
                        </div>
                    </div>

                    {open &&
                        <NewTask setOpen={setOpen} elementName={element?.name} id={element.id} />
                    }
                </div>
                :
                <NotFound />
            }
        </div>
    )
}