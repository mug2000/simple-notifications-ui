import type { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
    return <div className="bg-gray-50 flex align-items p-2">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide">{children}</h2>
    </div>
}