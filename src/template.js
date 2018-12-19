import React from 'react'
import Link from 'gatsby-link'
// import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Property = ({ data }) => {
  const property = data
  console.log(property)
  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{property.property_name}</h1>
    </div>
  )
}

export const propertyQuery = graphql`
  query PropertyByPath($path: String!) {
    propertiesJson(page: { eq: $path }) {
      property_name
      page
      location
    }
  }
`

export default Property
