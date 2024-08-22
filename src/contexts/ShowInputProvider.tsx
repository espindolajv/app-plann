import { createContext, useContext, useState } from "react"

interface ShowInputListType {
    showList: boolean;
    handleShowInputList: () => void
}

interface ShowInputWorkType {
    showWork: boolean
    handleShowInputWork: () => void
}

export const ShowInputListContext = createContext<ShowInputListType>({} as ShowInputListType)
export const ShowInputWorkContext = createContext<ShowInputWorkType>({} as ShowInputWorkType)

export const ShowInputListProvider = ({ children }: { children: React.ReactNode }) => {
    const [showList, setShowList] = useState(false)

    const handleShowInputList = () => {
        setShowList(!showList)
    }

    return (
        <ShowInputListContext.Provider value={{showList, handleShowInputList}}>
            {children}
        </ShowInputListContext.Provider>
    )
}

export const ShowInputWorkProvider = ({ children }: { children: React.ReactNode }) => {
    const [showWork, setShowWork] = useState(false)

    const handleShowInputWork = () => {
        setShowWork(!showWork)
    }

    return (
        <ShowInputWorkContext.Provider value={{showWork, handleShowInputWork}}>
            {children}
        </ShowInputWorkContext.Provider>
    )
}

export const useShowInputListContext = () => useContext(ShowInputListContext)
export const useShowInpuWorktContext = () => useContext(ShowInputWorkContext)