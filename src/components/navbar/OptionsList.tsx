import { ListContext } from "@/contexts/ListContextProvider";
import { useWorkContext } from "@/contexts/WorkContextProvider";
import { Pencil, Trash2 } from "lucide-react";
import { useContext } from "react";

export function Options({ id, workspace = false, refOpen }: { id: string, workspace?: boolean , refOpen: any}) {
    const { handleRemoveList } = useContext(ListContext)
    const { handleRemoveWork } = useWorkContext()

    return (
        <div
            className=" flex gap-1 items-center justify-center p-1 rounded-lg bg-zinc-50 absolute z-20 top-10 shadow-md animate-fade-in"
            ref={refOpen}
        >
            <button
                className="flex items-center justify-center gap-1 w-full rounded-md text-start p-1.5 text-xs font-medium bg-transparent text-red-600 hover:bg-red-100 duration-300"
                onClick={() => {workspace ? handleRemoveWork(id) : handleRemoveList(id)}}
            >
                <Trash2 className="size-4" />
            </button>
            <div className="bg-zinc-200 h-4 w-1.5 rounded-md" />
            <button
                className="flex items-center justify-center gap-1 w-full rounded-md text-start p-1.5 text-xs font-medium bg-transparent text-zinc-700 hover:bg-zinc-200 duration-300"
            >
                <Pencil className="size-4" />
            </button>
        </div>
    )
}