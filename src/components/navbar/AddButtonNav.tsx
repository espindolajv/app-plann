import { Plus  } from "lucide-react";

interface AddButtonNavProps {
    text: string
    handle: () => void
}

export function AddButtonNav({ text, handle }: AddButtonNavProps) {
    return (
        <button className="flex items-center bg-zinc-100 rounded-md gap-2 px-3 py-2 w-56 hover:bg-zinc-200 duration-500" onClick={handle}>
            <div className="rounded-[4px] p-0.5"><Plus strokeWidth={2} className="size-4 bg-transparent text-zinc-500"/></div>
            <div className="flex justify-between items-center flex-1">
                <h3 className="text-sm font-medium">{text}</h3>
            </div>
        </button>
    )
}