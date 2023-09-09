import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const BlogPost = ({data}) => {
    return (
      <Layout pageTitle={data.markdownRemark.frontmatter.title} pageHeading={data.markdownRemark.frontmatter.title}>

        <p>{data.markdownRemark}</p>
      
      </Layout>
    )
  }



export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default BlogPost
