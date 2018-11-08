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
import logo from '../../../images/logo.png';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    $(window).scroll(function (event) {
      var scroll = $(this).scrollTop();
      if (scroll > 10) {
        $('.navbar').addClass('bg-animate');
      } else if (scroll <= 10) {
        $('.navbar').removeClass('bg-animate');
      }
    });

    $(".navbar .nav-link").click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      var goto = $(this).data('goto');
      if (goto && !!$(goto)) {
        $('html, body').animate({
          scrollTop: $(goto).offset().top - 30
        }, {
          duration: 500
        });
      }
    });
  }

  render() {
    return (
      <Navbar light expand="md" fixed="top" className="px-lg-5">
        <NavbarBrand href="/">
          <img src={logo} className="sbx-logo" alt=""/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="" data-goto="#presentation">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" data-goto="#whatWeDo">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" data-goto="#careers">Careers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" data-goto="#contactUs">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}