import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Board } from './Board/Board';
export function Home() {
  const navigate = useNavigate();
  const handleNav = (path) => () => navigate(path)

  return (
    <>

      <Container className='p-4 mt-5 rounded-3 bg-secondary d-flex' >
        <div>
          <h1>Escacs</h1>
          <Button size='lg' onClick={handleNav('game')}>Jugar</Button>
        </div>
        <Board />
      </Container>
    </>
  )
}

