
import './App.scss';
import ListPage from './pages/Listpage';
import { ItemsProvider } from './context/ItemContext';
import {
  Routes, Route

} from "react-router-dom";
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
    <ItemsProvider>
      <Nav />
    <Routes>
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </ItemsProvider>
    </div>
  );
}

export default App;
