'use client'

import { ListContext } from "@/contexts/ListContextProvider"
import { useContext } from "react"
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { AddTaskButton } from "./ListContent";

dayjs.extend(localizedFormat)

interface ContentProps {
    id: string
}

export function Dashboard({ id }: ContentProps) {
    const { list } = useContext(ListContext)

    const findList = (id: string) => {
        const element = list.find(item => item.id === id)

        return element
    }

    const element = findList(id)

    return (
        <div className="w-full flex gap-5 h-full">
            <div className="flex flex-col gap-10 flex-1 px-12 py-10">
                <div>
                    <h2 className="text-2xl font-semibold">{element?.name}</h2>
                    <h3 className="text-base text-zinc-500">{dayjs(element?.date).format('LLL')}</h3>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <AddTaskButton />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-5 py-8 border-2 absolute w-[400px] h-full bg-zinc-50 right-0 top-0">
                <h3 className="font-medium text-sm"><span className="text-zinc-400 text-sm  ">{element?.name} / </span>New task</h3>
                <div className="flex flex-col gap-2">   
                    <input type="text" placeholder="Task name" className="outline-none border-2 px-2 py-1 rounded-lg text-sm"/>
                    <textarea className="outline-none border-2 px-2 py-1 rounded-lg text-sm resize-none h-40" placeholder="Description"></textarea>
                </div>
            </div>
        </div>
    )
}