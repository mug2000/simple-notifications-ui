import type { ReactNode } from "react";

export function Tab({ children, active = false }: { children: ReactNode, active?: boolean }) {
    return <button className={active ? "text-primary font-semibold pb-3 border-b-2 border-primary -mb-px" : "text-gray-500 font-semibold pb-3"}>{children}</button>
}
