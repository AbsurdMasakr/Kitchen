import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    menuOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return {
        navbarOpen: !this.state.navbarOpen,
      }
    })
  }
  handleMenu = () => {
    this.setState(() => {
      return {
        menuOpen: !this.state.menuOpen,
      }
    })
  }
  render() {
    return (
      <NavWrapper>
        <div className="wrap">
          <NavbarHeader
            handleNavbar={this.handleNavbar}
            navbarOpen={this.state.navbarOpen}
          />
          <NavbarLinks
            handleMenu={this.handleMenu}
            navbarOpen={this.state.navbarOpen}
            menuOpen={this.state.menuOpen}
          />
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: white;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 576px) {
    .wrap {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
