import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import ErrorPage from './views/ErrorPage';
import House from './components/House';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/:houseId" element={<House/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </div>
  );
}

export default App;
