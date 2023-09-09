/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Irene Bosque`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/posts`,
      },
    },

    `gatsby-transformer-remark`,

  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",

]
};



