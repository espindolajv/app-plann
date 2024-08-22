import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

interface ListButtonNavProps {
    text: string
    tasks: number
    id: string
}

export function ListButtonNav({ text, tasks, id }: ListButtonNavProps) {

    return (
        <div className="relative">
            <Link href={`/list/${id}`} className="flex items-center bg-zinc-100 rounded-md gap-2 pl-10 px-3 py-2 w-56 hover:bg-zinc-200 duration-500">
                <div className="flex justify-between items-center flex-1">
                    <h3 className="text-sm font-medium truncate">{text}</h3>
                    <h3 className="flex items-center justify-center text-sm bg-zinc-200 px-1 rounded-md font-medium min-w-5">{tasks}</h3>
                </div>
            </Link>
            <Link href={'/'} className="hover:bg-zinc-200 rounded-[4px] p-0.5 absolute bottom-2 left-3 duration-300">
                <EllipsisVertical strokeWidth={2} className="size-4 bg-transparent text-zinc-500" />
            </Link>
        </div>
    )
}