import ListPage from './pages/Listpage';
import { ItemsProvider } from './context/ItemContext';
import {
  Routes, Route

} from "react-router-dom";
import Nav from './components/Nav';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
    <ItemsProvider>
      <Nav />
    <Routes>
        <Route path="/listpage" element={<ListPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/profile" element={<Profile name='Tim Everenbeek' rank={0}/>} />
      </Routes>
    </ItemsProvider>
    </div>
  );
}

export default App;
