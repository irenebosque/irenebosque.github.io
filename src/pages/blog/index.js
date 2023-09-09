import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";



const BlogPage = ({data}) => {
    
  return(
      <main>
          <Layout pageTitle="My Blog Posts" pageHeading="blog Heading">




{
        data.allMarkdownRemark.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }





          </Layout>
      </main>

  )
}



export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`




export default BlogPage