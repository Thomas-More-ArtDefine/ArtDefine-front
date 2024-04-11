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
import Feed from './pages/feed/Feed';
import Post from './pages/Post';
import PostView from './pages/PostView';
import { FeedProvider } from './context/FeedContext';
import Groups from './pages/groups/Groups';



const router = createBrowserRouter([
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
            element: <Feed />,
          },
        ],
      },
      {
        path: '/groups',
        children: [
          {
            index: true,
            element: <Groups />,
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
        path: '/post',
        children: [
          {
            index: true,
            element: <h1>Not Found</h1>,
          },
          {
            path: ':id',
            element: <Post />,
          },
          {
            path: ':id/view',
            element: <PostView />,
          },
        ],
      },
      {
        path: '*',
        element: <h1>Not Found</h1>,
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
            <FeedProvider>
              <RouterProvider router={router} />
            </FeedProvider>
          </ArtworkProvider>
        </ItemsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;


// Path: artdefine/src/App.tsx