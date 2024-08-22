import { createContext, useState, ReactNode, useEffect  } from "react";
import { List } from '@/models/List';
import { v4 as uuidv4 } from 'uuid';

interface ListContextType {
    list: List[];
    handleSetList: (name: string) => void
    handleRemoveList: (id: string) => void
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


    return (
        <ListContext.Provider value={{ list, handleSetList, handleRemoveList }}>
            {children}
        </ListContext.Provider>
    );
};
