import React from 'react'
import { Jumbotron, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Header from '../Header/Header';
const Layout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        </>
    )
}

export default Layout
