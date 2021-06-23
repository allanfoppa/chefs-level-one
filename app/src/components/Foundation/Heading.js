import { createElement } from 'react'
import PropTypes from 'prop-types'

const Heading = ({level, styling, text}) => {
	return createElement(`h${level}`, { className: styling }, text)
}

Heading.propTypes = {
	text: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	styling: PropTypes.string
}

export default Heading