import React from 'react'
import PropTypes from 'prop-types'

export const FullContainer = ({children, styling}) => {
	return(
		<div className={`${styling ? styling : ''}`}>
			{children}
		</div>
	)
}

FullContainer.propTypes = {
	children: PropTypes.node.isRequired,
	styling: PropTypes.string
}

export const Container = ({children, styling}) => {
	return(
		<div className={`tw-container ${styling ? styling : ''}`}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	styling: PropTypes.string
}
