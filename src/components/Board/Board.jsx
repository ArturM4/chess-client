import { useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import "./Board.css"
export function Board() {

  //estat per controlar la mida del taulell
  const [boardWidth, setBoardWidth] = useState();

  //estat per amagar/mostrar taulell, comença a false i es posa a true per refrescar i evitar errors de renderitzar al canviar entre diferents pagines
  const [showBoard, setshowBoard] = useState(false);

  useEffect(() => {
    function handleResize() {
      //obté la mida del div que envolta la taula i canvia la mida de la taula per adaptar-se
      const boardWrapper = document.getElementsByClassName('boardWrapper')[0];
      setBoardWidth(boardWrapper.offsetWidth - 25);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    setshowBoard(true)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='boardWrapper'>

      {showBoard && <Chessboard boardWidth={boardWidth} />}
    </div>
  );
}
