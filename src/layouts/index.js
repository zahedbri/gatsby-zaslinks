import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { rhythm, scale } from '../utils/typography';

const containerStyle = {
	maxWidth: 700,
	margin: `0 auto`,
	padding: rhythm(3 / 4)
};

class DefaultLayout extends Component {
	render() {
		return (
			<div>
				<div
					css={{
						background: `#673399`,
						marginBottom: rhythm(1),
						padding: `${rhythm(1)} 0px`,
						'@media screen and (min-width: 500px)': {
							padding: `${rhythm(2)} 0px`
						}
					}}
				>
					<div css={containerStyle}>
						<h1
							css={{
								margin: 0,
								fontSize: scale(1.5).fontSize,
								lineHeight: 1,
								'@media screen and (min-width: 500px)': {
									fontSize: scale(1.8).fontSize,
									lineHeight: 1
								}
							}}
						>
							<Link
								css={{
									color: `#ffffff`,
									':hover': {
										color: `#ffffff`,
										textDecoration: `none`
									}
								}}
								to="/"
							>
								Gatsby.js + WordPress
							</Link>
						</h1>
					</div>
				</div>
				<div css={containerStyle}>{this.props.children}</div>
			</div>
		);
	}
}

DefaultLayout.propTypes = {
	children: PropTypes.object.isRequired
};

export default DefaultLayout;
