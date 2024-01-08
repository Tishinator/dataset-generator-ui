import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import DatasetGenerator from './pages/DatasetGenerator';


function App() {
  return (
    <div className="App">
      <Header />
      <DatasetGenerator />
    </div>
  );
}

export default App;
