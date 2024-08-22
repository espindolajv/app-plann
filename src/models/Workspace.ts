import { Member } from "./Member"

export interface Workspace {
    name: string
    color: string
    members?: Member[]
    id: string
}