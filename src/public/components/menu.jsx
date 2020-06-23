import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome } from '@fortawesome/fontawesome-free-solid'

import { Button, Navbar, Nav, NavDropdown, Modal, Form } from 'react-bootstrap';
import {  Route, Switch, Link } from "react-router-dom";
import '../lib/style.css';


const menus =[
    {
        name : 'home',
        to : '/',
        exact : true
    },
    {
        name : 'flute',
        to : '/flute',
        exact : true
    },
    {
        name : 'drum',
        to : '/drum',
        exact : true
    }
];
const MenuLink = ({label, to, activeOnlyWhenExact})=> {
    return(
        <Route
        path ={to}
        exact={activeOnlyWhenExact}
        children = {({match})=>{

            var active = match ? 'active' : '';
            return(
                <li className={active}>
                    <Link to = {to} className="my-link">{label}</Link>
                </li>
            );
        }}/>
    )
}

function LoginModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">  We'll never share your account with anyone else.  </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Submit  </Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}



class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalShow :false
        }
       // this.setModalShow= this.setModalShow.bind(this);
        //this.showMenu= this.showMenu.bind(this);
    }
   showMenu (menus){
        var result =null;
        result = menus.map((menu, index)=>{
            return (
                <MenuLink key ={index}
                label ={menu.name} to= {menu.to} activeOnlyWhenExact={menu.exact} />
            )
    
        })
    
        return result;
    }
    setModalShow(show){
   
        this.setState({
            modalShow : show
        });
    }
  render(){
    return (
        <div>
            <LoginModal
                show={this.state.modalShow}
                onHide={() =>{var show = false; this.setModalShow(show)} }
            />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home"> <FontAwesomeIcon icon={faHome} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {this.showMenu(menus)}
                            {/*  <MenuLink label ="Home" to= "/" activeOnlyWhenExact={true} />
                            <MenuLink label ="Flute" to= "/flute" activeOnlyWhenExact={false} />
                            <MenuLink label ="Drum" to= "/drum" activeOnlyWhenExact={false} />  */}
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Dank memes</Nav.Link>
                            <Nav.Link onClick={() => this.setModalShow(true)}> <FontAwesomeIcon icon={faUserCircle} />Login </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
        </div>
    )};
}

export default Menu;
