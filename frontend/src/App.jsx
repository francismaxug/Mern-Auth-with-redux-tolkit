import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <Header/>
      <Container><Outlet/></Container>
      
    </div>
    </>
  )
}

export default App
