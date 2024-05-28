import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';
import { useEffect, useRef, useState } from 'react';
import { useFeed } from '../context/FeedContext';
import WelcomeCard from './WelcomeCard';

export default function Layout() {

 const {isTop, setIsTop} = useFeed();
    const pageContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (pageContainerRef.current === null) {
        return;
      } else {
        const checkScroll = () => {
          setIsTop(pageContainerRef.current?.scrollTop === 0);
        };

        pageContainerRef.current.addEventListener('scroll', checkScroll);

        return () => pageContainerRef.current?.removeEventListener('scroll', checkScroll);
      }
    }, []);


  return (
    <>
     <Nav />
     <div className='page-container' ref={pageContainerRef}>
      {/* content of the pages */}
    <Outlet />
    </div>
    </>
  );
}