import { useWorkContext } from "@/contexts/WorkContextProvider"

interface DashboardProps {
    id: string
}

export function Dashboard({ id }: DashboardProps) {
    const { workspace } = useWorkContext()

    const findWorkspace = (id: string) => {
        const element = workspace.find(item => item.id === id)
    }

    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
}