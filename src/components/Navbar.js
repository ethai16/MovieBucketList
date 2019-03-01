import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import { MDBNavbar, MDBNavbarBrand,
    MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            textFieldValue: '',
            isOpen: false
        }
    }

    toggleCollapse = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    handleTextFieldChange = (e) =>{
        this.setState({
            textFieldValue: e.target.value
        });
    }


    search(event){
        event.preventDefault();
        var searchLink = this.state.textFieldValue
        var url = `/search/page=1&query=${searchLink}`
        window.location.href = url
    }

    render() {
        return (
        <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent style = {{boxShadow:'0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}>
            {/* <MDBNavbarBrand href="#home"><i class="fas fa-film"></i>TMBL</MDBNavbarBrand> */}
            <Navbar.Brand href = '/'><i className="fas fa-film"></i>TMBL</Navbar.Brand>
            <MDBNavbarToggler onClick ={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="mr-auto pcss">
              <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',borderRight: 'solid rgba(255,255,255) 1px',color:'white'}} href="/movies/page=1">Discover</Nav.Link>
              <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',borderRight: 'solid rgba(255,255,255) 1px',color:'white'}} href="/upnext">Up Next</Nav.Link>
                <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',borderRight: 'solid rgba(255,255,255) 1px',color:'white'}} href="/watchlist">Watch List</Nav.Link>
                <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',color:'white'}} href="/archive">Archive</Nav.Link>
            </MDBNavbarNav>
            <Form inline onSubmit = {(e) => this.search(e)}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.textFieldValue}  onChange={this.handleTextFieldChange}/>
              {/* <Button variant="outline-info" onClick={() => this.search()}>Search</Button> */}
            </Form>
            </MDBCollapse>
        </MDBNavbar>
        );
    }
}




export default MyNavbar

