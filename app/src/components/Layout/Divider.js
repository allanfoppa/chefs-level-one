import React from 'react'
import PropTypes from 'prop-types'

export default function Divider({styling}) {
	return(
		<hr
			className={`${styling ? styling: ''}`}
		/>
	)
}

Divider.propTypes = {
	styling: PropTypes.string.isRequired
}