import { ItemsProvider } from './context/ItemContext';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import UploadBanner from './pages/profile/UploadBanner';
import UploadProfilePic from './pages/profile/UploadProfilePic';
import ListPage from './pages/Listpage';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import AddPost from './pages/AddPost';
import { ArtworkProvider } from './context/ArtworkContext';
import Post from './pages/Post';



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
        path: '/add',
        children: [
          {
            index: true,
            element: <AddPost />,
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
        path: '/post/:id',
        element: <Post />,
        
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
          <ArtworkProvider>
            <RouterProvider router={router} />
          </ArtworkProvider>
        </ItemsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

// Path: artdefine/src/App.tsx