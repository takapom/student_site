import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>    

      <FontAwesomeIcon icon={faBars} size="3x" onClick={handleShow} className="humber"/>


        <Offcanvas show={show} onHide={handleClose} className="w-25">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>メニュー</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <ul className="list-unstyled">
            <Link to="/">
            <li><Button variant="primary">掲示板</Button></li>
            </Link>
          <li><Button variant="secondary">テスト対策</Button></li>
          <li><Button variant="success">教科書売買</Button></li>
          </ul>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
