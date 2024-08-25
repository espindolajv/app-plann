import { ToggleButton } from "@/components/ToggleButton";
import { X } from "lucide-react";

export function NewTask({ setOpen, name }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, name: string }) {
    return (
        <div className="flex flex-col justify-center p-3 border-2 absolute w-[400px] bg-zinc-50 right-4 top-4 rounded-xl animate-fade-in">
            <div className="flex flex-col gap-5 flex-1">
                <div className='flex justify-between'>
                    <h3 className="font-medium text-sm"><span className="text-zinc-400 text-sm  ">{name} / </span>New task</h3>
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
    )
}