import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo-kitchen.png"
import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper open={this.props.navbarOpen}>
        <Link to="/">
          <img src={logo} alt="company name" />
        </Link>
        <div
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    cursor: pointer;
  }
  .toggle-icon div {
    width: 25px;
    height: 3px;
    background: ${styles.colors.mainPurple};
    margin: 5px;
  }

  .line1 {
    transition: transform 0.3s;
    transform: ${props =>
      props.open ? "rotate(-45deg) translate(-5px,6px)" : "rotate(0deg)"};
  }

  .line2 {
    opacity: ${props => (props.open ? "0" : "1")};
     /* display: ${props => (props.menu ? "flex" : "none")}; */
  }

  .line3 {
    transition: transform 0.3s;
    transform: ${props =>
      props.open ? "rotate(45deg) translate(-5px,-6px)" : "rotate(0deg)"};
  }

  @media (min-width: 576px) {
    .toggle-icon {
      display: none;
    }
  }
`
