import PropTypes from 'prop-types'

const Image = (props) => <img src={props.src} alt={props.alt} className={props.styling} />

Image.PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    styling: PropTypes.string
}

export default Image