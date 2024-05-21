import { ItemsProvider } from './context/ItemContext';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import UploadBanner from './pages/profile/UploadBanner';
import UploadProfilePic from './pages/profile/UploadProfilePic';
import ListPage from './pages/Listpage';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import AddPost from './pages/AddPost';
import { ArtworkProvider } from './context/ArtworkContext';
import Feed from './pages/feed/Feed';
import Post from './pages/post/Post';
import PostView from './pages/post/PostView';
import { FeedProvider } from './context/FeedContext';
import Group from './pages/group/Group';
import Groups from './pages/groups/Groups';
import GroupSettings from './pages/group/GroupSettings';
import { GroupsProvider } from './context/GroupsContext';
import { GroupProvider } from './context/GroupContext';
import { UserProvider } from './context/UserContext';
import PostFeedback from './pages/post/PostFeedback';
import Search from './pages/search/Search';
import UserProfile from './pages/profile/UserProfile';
import { FolderProvider } from './context/FolderContext';
import { ProfileProvider } from './context/ProfileContext';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import ForgotPassword from './pages/login/Forgot';



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/login" />,
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
            element: <UserProfile />,
          },
          {
            path: 'editBanner',
            element: <UploadBanner />,
          },
          {
            path: 'uploadProfilePic',
            element: <UploadProfilePic />,
          },
          {
            path: ':id',
            element: <UserProfile />,
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
          {
            path: ':id/feedback',
            element: <PostFeedback />,
          },
          {
            path: ':id/feedback/:feedback_id',
            element: <PostFeedback />,
          },
        ],
      },
      {
        path: '/search',
        children: [
          {
            index: true,
            element: <Search/>,
          }
        ],
      },
      {
        path: '/group',
        children: [
          {
            index: true,
            element: <h1>Not Found</h1>,
          },
          {
            path: ':id',
            element: <Group/>,
          },
          {
            path: ':id/settings',
            element: <GroupSettings/>,
          },
        ],
      },
      {
        path: '*',
        element: <h1>Not Found</h1>,
      },
      {
        path: '/login',
        children: [
          {
            index: true,
            element: <Login/>,
          },
          {
            path: 'register',
            element: <Register/>,
          },
          {
            path: 'forgot-password',
            element: <ForgotPassword/>,
          },
        ],
      },
    ],
  },
]);

function App() {

  
  const { REACT_APP_API_URL} = process.env;
  console.log(REACT_APP_API_URL);
  console.log("sterretjes in een string");

  return (
    <div className="App">
      <AuthProvider>
        <ItemsProvider>
          <ArtworkProvider>
            <FeedProvider>
              <GroupsProvider>
                <GroupProvider>
                  <UserProvider>
                    <FolderProvider>
                      <ProfileProvider>
                        <RouterProvider router={router} />
                      </ProfileProvider>
                    </FolderProvider>
                  </UserProvider>
                </GroupProvider>
              </GroupsProvider>
            </FeedProvider>
          </ArtworkProvider>
        </ItemsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;


// Path: artdefine/src/App.tsx