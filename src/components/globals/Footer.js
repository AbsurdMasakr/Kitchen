import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <p className="affiliate">AFFILIATE DISCLOSURE</p>
        <p className="disclosure">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <br />
        <p className="copyright">copyright &copy; 2020 KitchenSink</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 1rem 0;
  background: ${styles.colors.mainPurple};
  color: white;
  margin-top: auto;

  .copyright,
  .affiliate,
  .disclosure {
    color: white;
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }

  .disclosure,
  .copyright {
    font-size: 14px;
  }
`
