import { Task } from "./Task"

export interface List {
    id: string
    name: string
    date: Date
    tasks: Task[]
    description?: string
}