import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from '../components/nav'
import Home from '../components/Home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav/>
    <Home/>
  </Layout>
)

export default IndexPage
