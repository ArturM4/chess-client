import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Board } from './components/Board/Board';
import { Home } from './components/Home';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Board />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
