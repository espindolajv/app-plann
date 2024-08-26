import { ListContext } from "@/contexts/ListContextProvider";
import { Task } from "@/models/Task";
import { X } from "lucide-react";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function NewTask({ setOpen, elementName, id }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, elementName: string, id: string }) {
    const { handleAddTask } = useContext(ListContext)
    const [select, setSelect] = useState('')

    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        setSelect(() => value);
        setTask(prevTask => ({
            ...prevTask,
            priority: value,
        }));
    }

    const [task, setTask] = useState<Task>({
        checked: false,
        priority: '',
        name: '',
        description: '',
        id: uuidv4()
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleAddTask(id, task);
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col justify-center p-3 border-2 absolute w-[400px] bg-zinc-50 right-4 top-4 rounded-xl animate-fade-in">
            <div className="flex flex-col gap-5 flex-1">
                <div className='flex justify-between'>
                    <h3 className="font-medium text-sm"><span className="text-zinc-400 text-sm  ">{elementName} / </span>New task</h3>
                    <button
                        className='flex justify-end'
                        onClick={() => setOpen(false)}
                    >
                        <X className='text-zinc-400 hover:text-zinc-800 duration-300' />
                    </button>

                </div>

                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Task name"
                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm"
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm resize-none h-40"
                        placeholder="Description"
                        onChange={handleChange}
                    />

                    <div>
                        <div className="border-2 rounded-md flex justify-center items-center p-1 gap-1">
                            <button
                                className={`flex-1 py-1 text-sm rounded-md ${select == 'low' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                                value='low'
                                type="button"
                                onClick={handleSelect}
                            >
                                Low
                            </button>

                            <div className="h-6 w-0.5 bg-zinc-300"></div>

                            <button
                                className={`flex-1 py-1 text-sm rounded-md ${select == 'medium' ? 'bg-yellow-500 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                                value='medium'
                                type="button"
                                onClick={handleSelect}
                            >
                                Medium
                            </button>

                            <div className="h-6 w-0.5 bg-zinc-300"></div>

                            <button
                                className={`flex-1 py-1 text-sm rounded-md ${select == 'high' ? 'bg-red-600 text-white font-semibold' : 'hover:bg-zinc-200'} duration-300`}
                                value='high'
                                type="button"
                                onClick={handleSelect}
                            >
                                High
                            </button>
                        </div>
                    </div>

                    <button
                        className='bg-green-200 w-full px-4 py-2 text-green-800 font-semibold rounded-md hover:bg-green-600 hover:text-zinc-50 duration-300'
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}