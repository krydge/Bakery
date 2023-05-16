import {Navbar, Modal, Button } from 'react-bootstrap'
import { useState } from "react"
import { CartContext } from "../CartContext"
import { useContext } from "react"

function NavBar(props) {
    const websiteData = props.websiteData
    const [show, setShow] = useState(false)
    const cart = useContext(CartContext)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Bakery</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart {0} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Items in your Cart:</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavBar;