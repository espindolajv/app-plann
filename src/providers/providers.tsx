'use client'

import { ListProvider } from "@/contexts/ListContextProvider";
import { ShowInputListProvider, ShowInputWorkProvider } from "@/contexts/ShowInputProvider";
import { WorkProvider } from "@/contexts/WorkContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ListProvider>
                <WorkProvider>
                    <ShowInputListProvider>
                        <ShowInputWorkProvider>
                            {children}
                        </ShowInputWorkProvider>
                    </ShowInputListProvider>
                </WorkProvider>
            </ListProvider>
        </>
    )
}