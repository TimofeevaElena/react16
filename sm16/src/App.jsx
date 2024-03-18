import { useState } from 'react'
import  { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Modal from 'react-bootstrap/Modal'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import OneCard from './OneCard/OneCard'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Форма заказа
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Ваш заказ в обработке</h4>
        <p>
          Скоро с Вами свяжется наш менеджер, чтобы обсудить все детали проекта.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Routes>
        <Route path="/onecard" element={<OneCard/>}></Route>
      </Routes>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">СТРОЙ HOUSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Главная</Nav.Link>
            <Nav.Link href="#action2">Каталог</Nav.Link>
            <Nav.Link href="#action2">О нас</Nav.Link>
            <Nav.Link href="#action2">Контакты</Nav.Link>
          </Nav>
          <div className="poisk-modal">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Найти..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Поиск</Button>
          </Form>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Заказать проект
          </Button>
          </div>
          
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/><br/>
    <Container>
      <h3>Каталог</h3><br/>
      <div className="filters">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Пентхаус</Button>
          <Button variant="secondary">Коттедж</Button>
          <Button variant="secondary">Дом</Button>
          <Button variant="secondary">Таунхаус</Button>
        </ButtonGroup>
        <DropdownButton id="dropdown-item-button" title="Сортировать по ...">
          <Dropdown.ItemText>Сортировать по ...</Dropdown.ItemText>
          <Dropdown.Item as="button">Цене</Dropdown.Item>
          <Dropdown.Item as="button">Материалу</Dropdown.Item>
          <Dropdown.Item as="button">Кол-ву этажей</Dropdown.Item>
        </DropdownButton>
      </div>
      <br/><br/>
      <div className="card-content">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Дом 1</Card.Title>
          <p class="cat">дом</p>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/onecard">Подробнее</Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Дом 2</Card.Title>
          <p class="cat">коттедж</p>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" >Подробнее</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Дом 3</Card.Title>
          <p class="cat">пентхаус</p>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Подробнее</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Дом 4</Card.Title>
          <p class="cat">таунхаус</p>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Подробнее</Button>
        </Card.Body>
      </Card>
      </div>
    </Container>
    
    </>
  )
}

export default App
