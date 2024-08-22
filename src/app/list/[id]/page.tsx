'use client'

import { useParams } from "next/navigation"
import { Dashboard } from "@/app/list/[id]/components/Dashboard"

export default function Home() {
    const { id } = useParams<{ id: string }>()

    return (
        <main className="w-full">
            <Dashboard id={id}/>
        </main>
    )
}