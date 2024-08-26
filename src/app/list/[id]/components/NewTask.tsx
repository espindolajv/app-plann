import { ToggleButton } from "@/components/ToggleButton";
import { ListContext } from "@/contexts/ListContextProvider";
import { Task } from "@/models/Task";
import { X } from "lucide-react";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function NewTask({ setOpen, elementName, id }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, elementName: string, id: string }) {
    const { handleAddTask } = useContext(ListContext)

    const [task, setTask] = useState<Task>({} as Task)
    const [priority, setPriority] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTask({
            checked: false,
            priority,
            name,
            description,
            id: uuidv4()
        })
        handleAddTask(id, task)
        setOpen(false)
    }

    const handleTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value
        setName(newName)
    }

    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }

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
                        placeholder="Task name"
                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm"
                        onChange={handleTaskName}
                    />

                    <textarea
                        className="outline-none border-2 px-3 py-2 rounded-lg text-sm resize-none h-40"
                        placeholder="Description"
                        onChange={handleDescription}
                    />

                    <ToggleButton setPriority={setPriority} />

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