'use client'

import { GroupNavbarList } from "./listgroup/GroupNavbarList";
import { GroupNavbarWork } from "./workspace/GroupNavbarWork";
import { Logo } from "./Logo";

export function Navbar() {
    
    return (
        <nav className="px-10 py-10 flex flex-col gap-10 items-start w-72 shadow-md">
            <Logo />
            <GroupNavbarList text="Lists" /> 
            <GroupNavbarWork text="Workspace" />
        </nav>
    )
}