import { ListContext } from "@/contexts/ListContextProvider";
import type { Task } from "@/models/Task";
import { Pencil, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

export function Task({ task }: { task: Task }) {
    const [check, setCheck] = useState(task.checked)
    const { handleRemoveTask, handleCheckTask } = useContext(ListContext)

    useEffect(() => {
        setCheck(task.checked);
    }, [task.checked]);

    const handleCheckboxChange = () => {
        setCheck(!check);
        handleCheckTask(task.id);
    };

    return (
        <div className="flex gap-4 rounded-md w-auto px-4 py-2 relative ">
            <input id='check' type="checkbox" className='accent-zinc-800 z-0' onChange={handleCheckboxChange} checked={check} />
            <label className="group" htmlFor="check">
                <span className={`${check ? 'line-through text-zinc-400' : 'text-zinc-700'} duration-200 z-0 font-semibold text-sm flex gap-2`}>
                    {task.name}
                </span>
                <div
                    className="hidden group-hover:flex group-hover:flex-col group-hover:gap-2 min-w-96 absolute p-4 shadow-xl bg-zinc-100 animate-fade-in rounded-md top-6 z-10 left-3"
                >
                    <div className="flex flex-col gap-2 ">
                        <div className="flex flex-col break-words gap-0.5">
                            <div className="flex justify-between">
                                <h3 className="text-xs font-semibold text-zinc-400">Description:</h3>
                                {task.priority === 'low' && <span className='text-blue-600 font-bold text-xs'>{task.priority[0].toUpperCase()}</span>}
                                {task.priority === 'medium' && <span className='text-yellow-500 font-bold text-xs'>{task.priority[0].toUpperCase()}</span>}
                                {task.priority === 'high' && <span className='text-red-600 font-bold text-xs'>{task.priority[0].toUpperCase()}</span>}
                            </div>
                            <p className="font-medium text-zinc-700">{task.description}</p>
                        </div>

                        <div className="h-0.5 w-full bg-zinc-200" />

                        <div className="flex gap-2">
                            <button
                                className="flex w-1/2 gap-2 items-center justify-center rounded-md py-1.5 px-4 text-sm font-medium bg-transparent text-red-600 hover:bg-red-100 duration-300"
                                onClick={() => handleRemoveTask(task.id)}
                            >
                                <Trash2 className="size-4" />
                                Remove Task
                            </button>
                            <button
                                className="flex w-1/2 gap-2 items-center justify-center rounded-md py-1.5 px-4 text-sm font-medium bg-transparent text-zinc-600 hover:bg-zinc-200 duration-300"
                            >
                                <Pencil className="size-4" />
                                Edit name
                            </button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}