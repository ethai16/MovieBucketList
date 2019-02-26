import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            textFieldValue: '',
        }
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
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/movies/page=1">Discover</Nav.Link>
              <Nav.Link href="/upnext">Up Next</Nav.Link>
              <NavDropdown title="Your Movies" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/watchlist">Watch List</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/archive">Archive</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline onSubmit = {(e) => this.search(e)}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.textFieldValue}  onChange={this.handleTextFieldChange}/>
              {/* <Button variant="outline-info" onClick={() => this.search()}>Search</Button> */}
            </Form>
        </Navbar>
        );
    }
}




export default MyNavbar

