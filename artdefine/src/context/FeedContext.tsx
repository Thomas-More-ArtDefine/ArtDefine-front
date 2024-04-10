import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getRandomFeed } from '../api';
import { Artwork } from '../model/PostModel';


interface FeedContextType {
    // mock: string;
    // setMock: (value: string) => void;
    artworks: Artwork[];
}

export const FeedContext = createContext<FeedContextType | null>(null);

export const useFeed = () => useContext(FeedContext)!;

export const FeedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    // const [mock, setMock] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRandomFeed();
            //setMock(data);
        //    setMock("test");
           setArtworks(data);
        };

        fetchData();
        
    }, []);

    const value = useMemo(() => ({ artworks }), [artworks]);

    return (
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    );
};