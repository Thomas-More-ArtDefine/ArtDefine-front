import { ItemsProvider } from './context/ItemContext';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import UploadBanner from './pages/Profile/UploadBanner';
import UploadProfilePic from './pages/Profile/UploadProfilePic';
import ListPage from './pages/Listpage';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';



const router =  createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/feed" />,
      },
      {
        path: '/feed',
        children: [
          {
            index: true,
            element: <h1>Feed</h1>,
          },
        ],
      },
      {
        path: '/profile',
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'editBanner',
            element: <UploadBanner />,
          },
          {
            path: 'uploadProfilePic',
            element: <UploadProfilePic />,
          },
        ],
      },
      {
        path: '/listpage',
        children: [
          {
            index: true,
            element: <ListPage />,
          },
        ],
      },
      {
        path: '*',
        element:<h1>Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ItemsProvider>
          <RouterProvider router={router} />
        </ItemsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

// Path: artdefine/src/App.tsx