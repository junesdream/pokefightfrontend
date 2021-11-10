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
            <Nav.Link href='#action1'>HOME</Nav.Link>
            <Nav.Link href='#action2'>POKEMON</Nav.Link>
            <Nav.Link href='#action3'>RANGLISTE</Nav.Link>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#' disabled>
              PLAY
            </Nav.Link>
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
