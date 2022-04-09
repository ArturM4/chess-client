import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1>Escacs</h1>
      <Link to="/game"><button>Jugar</button></Link>
    </>
    
  )
}
