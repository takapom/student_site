import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navibar from "./Navibar";





function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>    
    <Navibar/>

   <header className="head-menu">
      
  <Navbar expand="lg" className="bg-bg-primary fixed-top">

      <Container>
        <Navbar.Brand href="#home">Yamato　university</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="./">掲示板</Nav.Link>
            <Nav.Link href="#link">教科書売買システム</Nav.Link>
            <Nav.Link href="#link">テスト対策フォーム</Nav.Link>
            <NavDropdown title="more" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">教員メールアドレス</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">時間割</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                運営募集ページ
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </header>


    </>
  );
}

export default Sidebar;

