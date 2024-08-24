export interface Task {
    name: string
    checked: boolean
    priority: 'hard' | 'medium' | 'low'
    description?: string
}