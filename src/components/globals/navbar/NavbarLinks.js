import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"
import { FaAngleDown } from "react-icons/fa"

export default class NavbarLinks extends Component {
  render() {
    const { handleMenu } = this.props
    return (
      <LinkWrapper open={this.props.navbarOpen} menu={this.props.menuOpen}>
        <li>
          <div
            className="nav-links category"
            onClick={() => {
              handleMenu()
            }}
          >
            Categories <FaAngleDown className="arrow" />
          </div>
          <ul className="dropdown">
            <li>
              <Link to="/faucets/" className="dropdown-links">
                Faucets
              </Link>
            </li>
            <li>
              <Link to="/sinks/" className="dropdown-links">
                Sinks
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about/" className="nav-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" className="nav-links">
            Contact
          </Link>
        </li>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-links,
  .dropdown-links {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 1rem 1rem;
    color: ${styles.colors.lightGray};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    letter-spacing: 2px;
    &:hover {
      color: ${styles.colors.mainGold};
    }
    /* &:focus {
      color: ${styles.colors.mainGold};
    } */
  }

  .dropdown-links {
    justify-content: flex-start;
    border-left: 2px solid ${styles.colors.mainGold};
    width: 162px;
    margin: 0 auto;
    
  }


  .dropdown {
    /* display: ${props => (props.menu ? "flex" : "none")}; */
    height: ${props => (props.menu ? "100px" : "0px")};
    overflow: hidden;
    ${styles.transObject({ time: "0.3s" })};
    flex-direction: column;
  }

  height: ${props =>
    props.menu && props.open ? "280px" : props.open ? "165px" : "0px"};
 
  overflow: hidden;
  ${styles.transObject({ time: "0.3s" })};

.arrow{
  transition: transform 0.3s;
  transform: ${props => (props.menu ? "rotate(-180deg)" : "rotate(0deg)")};
}


  @media (min-width: 576px) {
    height: auto;
    display: flex;
    font-size: 14px;
    .nav-links {
      padding: 0.5rem 1rem;
    }
    .dropdown {
      position: absolute;
      flex-direction: column;
      width: 160px;
      height: ${props => (props.menu ? "107px" : "0px")};
      ${styles.transObject({ time: "0.3s" })};
      background: white;
      padding-top: 7px;
    }
  }
`
