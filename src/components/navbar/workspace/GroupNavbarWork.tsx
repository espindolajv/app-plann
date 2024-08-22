import { AddButtonNav } from "../AddButtonNav"
import { useShowInpuWorktContext } from "@/contexts/ShowInputProvider"
import { useWorkContext } from "@/contexts/WorkContextProvider"
import { WorkButtonNav } from "./WorkButtonNav"
import { FormWorkspace } from "./FormWorkspace"

interface GroupNavbarProps {
    children?: React.ReactNode
    text: string
}

export function GroupNavbarWork({ text }: GroupNavbarProps) {
    const { workspace } = useWorkContext()
    const { showWork, handleShowInputWork } = useShowInpuWorktContext()

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg">{text}</h2>
            <div className="flex flex-col gap-1.5">
                {workspace?.map((item) => (
                    <WorkButtonNav key={item.name} color={item.color} name={item.name} id={item.id} />
                ))}
                {showWork && <FormWorkspace />}
                <AddButtonNav text="Create new workspace" handle={handleShowInputWork} />
            </div>
        </div>
    )
}