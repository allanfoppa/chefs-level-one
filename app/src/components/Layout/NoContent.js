import React from 'react'
import PropTypes from 'prop-types'

const NoContent = ({message}) => {
	return(
		<p id="no-content">{message}</p>
	)
}

NoContent.propTypes = {
	message: PropTypes.string
}

export default NoContent