import React from 'react'
import PropTypes from 'prop-types'

const Image = (props) => <img loading="lazy" src={props.src} alt={props.alt} className={props.styling} />

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	styling: PropTypes.string
}

export default Image