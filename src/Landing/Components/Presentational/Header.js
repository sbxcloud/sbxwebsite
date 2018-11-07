import React, {Component} from 'react';
import $ from 'jquery';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../../../images/logo.svg';


export default class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    $(window).scroll(function (event) {
      var scroll = $(this).scrollTop();
      console.log(scroll);
      if (scroll > 10) {
        $('.header').addClass('opacityAnimation');
      } else if (scroll <= 10) {
        $('.header').removeClass('opacityAnimation');
      }
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <Navbar light expand="md" fixed="top" className="mx-lg-5">
        <NavbarBrand href="/">
          <img src={logo} className="sbx-logo" alt=""/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}