import React from 'react'
import PropTypes from 'prop-types'

export const FullContainer = (props) => {
	return(
		<div className={`${props.styling}`}>
			{props.children}
		</div>
	)
}

FullContainer.propTypes = {
	children: PropTypes.func.isRequired,
	styling: PropTypes.string
}

export const Container = (props) => {
	return(
		<div className={`container ${props.styling}`}>
			{props.children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.func.isRequired,
	styling: PropTypes.string
}
