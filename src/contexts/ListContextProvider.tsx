import { createContext, useState, ReactNode, useEffect } from "react";
import type { List } from '@/models/List';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "@/models/Task";

interface ListContextType {
    list: List[];
    handleSetList: (name: string) => void
    handleRemoveList: (id: string) => void
    handleAddTask: (id: string, task: Task) => void
    handleRemoveTask: (id: string) => void
    handleCheckTask: (id: string) => void
}

export const ListContext = createContext<ListContextType>({} as ListContextType);

export const ListProvider = ({ children }: { children: ReactNode }) => {
    const [list, setList] = useState<List[]>(() => {
        const data = localStorage.getItem('lists-objects')
        if (!data) {
            return []
        }

        return JSON.parse(data)
    });


    useEffect(() => {
        localStorage.setItem('lists-objects', JSON.stringify(list))
    }, [list])


    const handleSetList = (name: string) => {
        const newListItem: List = {
            date: new Date(),
            name,
            tasks: [],
            id: uuidv4()
        };

        setList([...list, newListItem]);
    };


    const handleRemoveList = (id: string) => {
        setList((prevList) => prevList.filter(item => item.id !== id))
    }

    const handleAddTask = (id: string, task: Task) => {
        setList(prevList => {
            return prevList.map(item =>
                item.id === id
                    ? { ...item, tasks: [...item.tasks, task] }
                    : item
            );
        });
    }

    const handleRemoveTask = (id: string) => {
        const newList = list.map(item => ({
            ...item,
            tasks: item.tasks.filter(task => task.id !== id)
        }));
        setList(newList);
    };

    const handleCheckTask = (id: string) => {
        const newList = list.map(item => ({
            ...item,
            tasks: item.tasks.map(task => 
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        }));
        setList(newList);
    }

    return (
        <ListContext.Provider value={{ list, handleSetList, handleRemoveList, handleAddTask, handleRemoveTask, handleCheckTask }}>
            {children}
        </ListContext.Provider>
    );
};