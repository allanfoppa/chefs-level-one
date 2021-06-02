import PropTypes from 'prop-types'

export const Paragraph = (props) => {
    return(
        <p
            className={`tw-text-base tw-text-gray-900 ${props.styling}`}
        >
            {props.children}
        </p>
    )
}

Paragraph.propTypes = {
    styling: PropTypes.string
}

export const Span = (props) => {
    return(
        <span
            className={`tw-text-sm tw-text-gray-800 ${props.styling}`}
        >
            {props.children}
        </span>
    )
}

Span.propTypes = {
    styling: PropTypes.string
}