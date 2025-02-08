// SessionContext.tsx
"use client";

import React, { createContext, useContext, useState } from 'react';

interface SessionContextType {
    organisationId: string | null;
    setOrganisationId: (id: string | null) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [organisationId, setOrganisationId] = useState<string | null>(null);

    return (
        <SessionContext.Provider value={{ organisationId, setOrganisationId }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};