import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </div>
  );
}

export default App;
