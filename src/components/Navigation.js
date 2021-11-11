import React from 'react'
import './Navigation.css'
import {
  Button,
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from 'react-bootstrap'
import { SiPokemon } from 'react-icons/si'

const Navigation = () => {
  return (
    <Navbar className='color-nav' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <SiPokemon className='logo-icon' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href='/'>HOME</Nav.Link>
            <Nav.Link href='/pokemon'>POKEMON</Nav.Link>
            <Nav.Link href='/leaderboard'>RANGLISTE</Nav.Link>
            <Nav.Link href='/game'>PLAY</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
