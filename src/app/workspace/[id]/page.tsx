'use client'

import { useParams } from "next/navigation"
import { Dashboard } from "./components/Dashboard"

export default function Home() {
    const { id } = useParams<{ id: string }>()

    return (
        <main>
            <Dashboard id={id}/>
        </main>
    )
}