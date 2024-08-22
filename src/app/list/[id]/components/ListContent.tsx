'use client'
import { useRouter } from "next/navigation"
import { ListContext } from "@/contexts/ListContextProvider"
import { useContext } from "react"
import { Plus } from "lucide-react"

export function AddTaskButton() {
    const { list, handleRemoveList } = useContext(ListContext)
    const router = useRouter()
    const removeItem = (id: string) => {

        router.push('/')
        handleRemoveList(id)
    }

    return (
        <div>
            <div className="w-full flex gap-3 border-dashed border-2 border-zinc-200 rounded-md px-4 py-2 items-center hover:bg-zinc-200 duration-500">
                <Plus className="text-zinc-400 size-5"/>
                <h3 className="font-medium">New task</h3>
            </div>
        </div>
    )
}