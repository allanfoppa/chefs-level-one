import React from 'react'
import PropTypes from 'prop-types'

const NoContent = (props) => {
	return(
		<p id="no-content">{props.message}</p>
	)
}

NoContent.propTypes = {
	message: PropTypes.string
}

export default NoContent