import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { Options } from "../Options";
import { useEffect, useRef, useState } from "react";

interface ListButtonNavProps {
    text: string
    tasks: number
    id: string
}

export function ListButtonNav({ text, tasks, id }: ListButtonNavProps) {
    const [open, setOpen] = useState(false)
    const optionsRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (optionsRef.current &&
                buttonRef.current &&
                !optionsRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative">
            <Link href={`/list/${id}`} className="flex items-center rounded-md gap-2 pl-10 px-3 py-2 w-56 hover:bg-zinc-200 duration-500 animate-fade-in">
                <div className="flex justify-between items-center flex-1">
                    <h3 className="text-sm font-medium truncate">{text}</h3>
                    <h3 className="flex items-center justify-center text-sm bg-zinc-100 px-1 rounded-md font-medium min-w-5">{tasks}</h3>
                </div>
            </Link>
            <button
                className={`${open ? 'bg-zinc-200' : 'hover:bg-zinc-200'} rounded-[4px] p-0.5 absolute bottom-2 left-3 duration-300 animate-fade-in z-10`}
                onClick={() => setOpen(!open)}
                ref={buttonRef}
            >
                <EllipsisVertical strokeWidth={2} className="size-4 bg-transparent text-zinc-500" />
            </button>
            {open && <Options id={id} refOpen={optionsRef} />}
        </div>
    )
}