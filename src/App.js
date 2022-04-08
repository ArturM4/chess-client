import { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board';

function App() {
  const [boardWidth, setBoardWidth] = useState();

  useEffect(() => {
    function handleResize() {
      const container = document.getElementsByClassName('boardWrapper')[0];
      setBoardWidth(container.offsetWidth - 30);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Board boardWidth={boardWidth}/>
  );
}

export default App;
