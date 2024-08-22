import { useContext } from "react"
import { AddButtonNav } from "../AddButtonNav"
import { FormList } from "./FormList"
import { ListButtonNav } from "./ListButtonNav"
import { ListContext } from "@/contexts/ListContextProvider"
import { useShowInputListContext } from "@/contexts/ShowInputProvider"

interface GroupNavbarProps {
    children?: React.ReactNode
    text: string
}

export function GroupNavbarList({ text }: GroupNavbarProps) {
    const { list } = useContext(ListContext)
    const { showList, handleShowInputList } = useShowInputListContext()

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg">{text}</h2>
            <div className="flex flex-col gap-1.5">
                {list.map((item) => (
                    <ListButtonNav text={item.name} key={item.id} tasks={item.tasks?.length} id={item.id}/>
                ))}
                {showList && <FormList />}
                <AddButtonNav text="Create new list" handle={handleShowInputList} />
            </div>
        </div>
    )
}