import { LibraryBig } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <div className="flex items-center gap-2">
                <LibraryBig className="size-8 bg-zinc-900 text-zinc-50 p-1 rounded-md flex justify-center items-center" />
                <h1 className="text-xl font-bold">Plan.io</h1>
            </div>
        </Link>
    )
}