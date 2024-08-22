import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Workspace } from "@/models/Workspace";
import { v4 as uuidv4 } from 'uuid'

interface WorkContextType {
    workspace: Workspace[];
    handleSetWork: (name: string, color: string) => void
    handleRemoveWork: (id: string) => void
}

export const WorkContext = createContext<WorkContextType>({} as WorkContextType);

export const WorkProvider = ({ children }: { children: ReactNode }) => {
    const [workspace, setWorkspace] = useState<Workspace[]>(() => {
        const data = localStorage.getItem('workspace-objects')
        if (!data) {
            return []
        }

        return JSON.parse(data)
    });

    useEffect(() => {
        localStorage.setItem('workspace-objects', JSON.stringify(workspace))
    }, [workspace])

    const handleSetWork = (name: string, color: string) => {
        const newWorkItem: Workspace = {
            name,
            color,
            id: uuidv4()
        };

        setWorkspace([...workspace, newWorkItem]);
    };

    const handleRemoveWork = (id: string) => {
        setWorkspace((prev) => prev.filter(item => item.id !== id))
    }

    return (
        <WorkContext.Provider value={{ workspace, handleSetWork, handleRemoveWork}}>
            {children}
        </WorkContext.Provider>
    );
};

export const useWorkContext = () => useContext(WorkContext)