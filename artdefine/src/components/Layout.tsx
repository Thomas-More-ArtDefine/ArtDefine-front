import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';

export default function Layout() {


  return (
    <>
     <Nav />
     <div className='page-container'>
    <Outlet />
    </div>
    </>
  );
}