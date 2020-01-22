module.exports = {
	siteMetadata: {
		title: `zaslinks-portal`,
		description: `Student documents record portal`,
		author: `@MaedahBatool`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `https://zaslinks.com`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		// @TODO: STEP #1: Configure WordPress Backend as a source.
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				// Your WordPress source.
				baseUrl: `zaslinks.com`,
				protocol: `https`,
				// Only fetches posts, tags and categories from the baseUrl.
				includedRoutes: ['**/posts', '**/tags', '**/categories'],
				// Not using ACF so putting it off.
				useACF: false
			}
		},
		`gatsby-plugin-glamor`,
		`gatsby-plugin-offline`
	]
};
