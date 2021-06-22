import React from 'react'
import PropTypes from 'prop-types'

const Grid = (props) => {
	return(
		<div className={props.styling}>
			{props.children}
		</div>
	)
}

Grid.propTypes = {
	children: PropTypes.array.isRequired,
	styling: PropTypes.string
}

export default Grid