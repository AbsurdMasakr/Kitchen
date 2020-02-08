import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { BannerButton } from "../utils"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>hello from homepage</div>
    {/* <BannerButton>menu</BannerButton> */}
  </Layout>
)

export default IndexPage
