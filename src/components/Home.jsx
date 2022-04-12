import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Board } from './Board/Board';
import "../general.css"
export function Home() {
  const navigate = useNavigate();
  const handleNav = (path) => () => navigate(path)

  return (
    <>

      <Container className='p-4 mt-5 rounded-3 bg-secondary' >
        <Row>
          <Col xs={12} md={3}>
            <div>
              <h1 className='mb-4 mt-3 text-light text-center'>Escacs</h1>

              <Stack className="mx-auto">
                <Button onClick={handleNav('game')} size='lg' className='c-386ecf ms-2 py-3 mb-2 mb-md-4' variant=''>Un Jugador</Button>
                <Button size='lg' className='c-386ecf ms-2 py-3 mb-2 mb-md-4' variant=''>Multijugador</Button>
                <Button size='lg' className='c-386ecf ms-2 py-3' variant=''>Canviar estils</Button>
              </Stack>

            </div>
          </Col>
          <Col xs={12} md={9}>
            <Board />
          </Col>
        </Row>
      </Container>
    </>
  )
}

