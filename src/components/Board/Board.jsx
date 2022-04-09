import { useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import "./Board.css"
export function Board() {

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
    <div className='boardWrapper'>
      <Chessboard boardWidth={boardWidth} />
    </div>
  );
}
