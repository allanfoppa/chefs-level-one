import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({children, styling}) => {
	return(
		<div className={styling ? styling: ''}>
			{children}
		</div>
	)
}

Grid.propTypes = {
	children: PropTypes.array.isRequired,
	styling: PropTypes.string
}

export default Grid