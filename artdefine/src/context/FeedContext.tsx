import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getAllUsers } from '../api';
;


interface FeedContextType {
    mock: string;
    setMock: (value: string) => void;
}

export const FeedContext = createContext<FeedContextType | null>(null);

export const useFeed = () => useContext(FeedContext)!;

export const FeedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   
    const [mock, setMock] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
            //const data = await getAllUsers();
            //setMock(data);
           setMock("test");
        };

        fetchData();
        
    }, []);

    const value = useMemo(() => ({ mock,setMock }), [mock, setMock]);

    return (
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    );
};