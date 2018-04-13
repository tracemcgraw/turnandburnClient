import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

class SiteBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          isOpen: false
        };
        this.toggle = this.toggle.bind(this);
      }
      toggle(){
          this.setState({
              isOpen: !this.state.isOpen
          });
      }
    render() {
        return (
            <div>
                <Navbar color="faded"  light expand="md">
                    <NavbarBrand href="/">Turn and Burn</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.isOpen} navbar>
                    <Nav className="ml-auto"navbar>
                    <NavItem>
                        
                        <NavLink onClick={() => this.props.clickLogout()}>Logout</NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;