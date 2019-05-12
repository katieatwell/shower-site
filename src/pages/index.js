import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from '../components/nav'
import Blobs from '../components/blobs'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav/>
    <div className={'wrapper'} style={{ position: `relative` }}>
      <h1 style={{opacity: .8}}>Oh <br/> boy!</h1>
      <Blobs/>
    </div>
    <div style={{ height: `100vh` }}></div>
      {/* <Antlers  style={{ height: `100%`, width: `100%`, objectFit: `contain`}}/> */}
  </Layout>
)

export default IndexPage
