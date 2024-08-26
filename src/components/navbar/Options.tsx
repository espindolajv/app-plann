import { ListContext } from "@/contexts/ListContextProvider";
import { useWorkContext } from "@/contexts/WorkContextProvider";
import { Pencil, Trash2 } from "lucide-react";
import { useContext } from "react";
import { useParams, useRouter } from "next/navigation";

export function Options({ idItem, workspace = false, refOpen }: { idItem: string, workspace?: boolean, refOpen: any }) {
    const { handleRemoveList } = useContext(ListContext)
    const { handleRemoveWork } = useWorkContext()
    const { id } = useParams<{ id: string }>()
    const router = useRouter()

    const remove = (idItem: string, workspace: boolean) => {
        if (workspace) {
            handleRemoveWork(idItem)
        }
        
        handleRemoveList(idItem)

        if (id === idItem) {
            router.push('/')
        }
    }

    return (
        <div
            className=" flex gap-1 items-center justify-center p-1 rounded-lg bg-zinc-50 absolute z-20 top-10 shadow-xl animate-fade-in"
            ref={refOpen}
        >
            <button
                className="flex items-center justify-center gap-1 w-full rounded-md text-start p-1.5 text-xs font-medium bg-transparent text-red-600 hover:bg-red-100 duration-300"
                onClick={() => remove(idItem, workspace)}
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