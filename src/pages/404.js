import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorWrapper>
      <h1>Error 404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <br />
      <Link to="/">Home</Link>
    </ErrorWrapper>
  </Layout>
)

export default NotFoundPage

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
