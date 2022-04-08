import { Chessboard } from 'react-chessboard';
import "./Board.css"
export function Board({ boardWidth }) {
  return (
    <div className='boardWrapper'>
      <Chessboard boardWidth={boardWidth} />
    </div>
  );
}
