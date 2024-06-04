import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { getGlobalFeed, getMainFeed, getRandomFeed } from '../api';
import { Artwork } from '../model/PostModel';


interface FeedContextType {
    // mock: string;
    // setMock: (value: string) => void;
    artworks: Artwork[];
    isTop: boolean;
    setIsTop: (value: boolean) => void;
    findGlobalFeed: () => Promise<Artwork[]  | undefined>;
    findRandomFeed: () => Promise<Artwork[]  | undefined>;
    findMainFeed: (id:string) => Promise<Artwork[]  | undefined>;
}

export const FeedContext = createContext<FeedContextType | null>(null);

export const useFeed = () => useContext(FeedContext)!;

export const FeedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [isTop, setIsTop] = useState<boolean>(true);
    // const [mock, setMock] = useState<string>("")

    useEffect(() => {
    }, []);

    const findRandomFeed = useCallback(async (): Promise<Artwork[] | undefined> => {
        const fetchData = async () => {
            const data = await getRandomFeed();
            return data;
        };
        const response = await fetchData();
        setArtworks(response);
        return response;
      }, []);

    const findGlobalFeed = useCallback(async (): Promise<Artwork[] | undefined> => {
        const fetchData = async () => {
            const data = await getGlobalFeed();
            return data;
        };
        const response = await fetchData();
        setArtworks(response);
        return response;
      }, []);

      const findMainFeed = useCallback(async (id:string): Promise<Artwork[] | undefined> => {
        const fetchData = async (id:string) => {
            const data = await getMainFeed(id);
            return data;
        };
        const response = await fetchData(id);
        setArtworks(response);
        return response;
      }, []);

    const value = useMemo(() => ({ artworks, isTop, setIsTop, findGlobalFeed, findRandomFeed, findMainFeed }), [artworks, isTop, setIsTop, findGlobalFeed, findRandomFeed, findMainFeed]);

    return (
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    );
};