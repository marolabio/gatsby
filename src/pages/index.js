import React from 'react'
import { Img } from 'gatsby-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = props => {
  const data = props.data.allImageSharp.edges
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      {data.map(node => <Img resolutions={node} />)}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const ImageQuery = graphql`
  {
    allImageSharp {
      edges {
        node {
          resolutions(width: 300, height: 300) {
            src
            width
            height
          }
        }
      }
    }
  }
`

export default IndexPage
