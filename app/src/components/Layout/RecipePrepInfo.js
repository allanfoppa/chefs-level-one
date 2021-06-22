import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph, Span } from '../Foundation/Typography'

export default function RecipePrepInfo({title, info, showMinutes}) {
	return(
		<div>
			<Paragraph>
				<b>{title}</b>
			</Paragraph>
			<Span>
				{info} {showMinutes && 'MIN'}
			</Span>
		</div>
	)
}

RecipePrepInfo.propTypes = {
	title: PropTypes.string.isRequired,
	showMinutes: PropTypes.bool,
	info: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}