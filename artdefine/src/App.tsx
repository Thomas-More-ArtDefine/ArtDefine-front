import './App.css';
import ListPage from './pages/Listpage';
import { ItemsProvider } from './context/ItemContext';
function App() {
  return (
    <div className="App">
    <ItemsProvider>
      <ListPage />
    </ItemsProvider>
    </div>
  );
}

export default App;
