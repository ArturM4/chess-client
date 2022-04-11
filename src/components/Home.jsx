import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Board } from './Board/Board';
export function Home() {
  const navigate = useNavigate();
  const handleNav = (path) => () => navigate(path)

  return (
    <>

      <Container className='p-4 mt-5 rounded-3 bg-secondary' >
        <Row>
          <Col xs={3}>
            <div>
              <h1 className='mb-4 mt-3 text-light text-center'>Escacs</h1>
              <Button size='lg' onClick={handleNav('game')}>Un Jugador</Button>

            </div>
          </Col>
          <Col xs={9}>
            <Board />
          </Col>
        </Row>
      </Container>
    </>
  )
}

