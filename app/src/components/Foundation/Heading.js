import { createElement } from "react"
import PropTypes from 'prop-types'

const Heading = (props) => {
    return createElement(`h${props.level}`, { className: props.styling }, props.text)
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    styling: PropTypes.string
}

export default Heading