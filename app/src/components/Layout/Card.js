import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from '../Media/Image'
import { ThumbsUp, ThumbsDown } from '../Foundation/Icons'
import { Paragraph } from '../Foundation/Typography'

const Card = (props) => {
	return(
		<div className="tw-overflow-hidden tw-shadow-lg tw-rounded-lg tw-h-96 tw-w-full md:tw-w-80 tw-cursor-pointer tw-m-auto">
			<Link
				to={{
					pathname: `/${props.name}`,
					idRecipe: props.idRecipe
				}}
				className="tw-block tw-h-full"
			>
				<CardImage src={props.image} alt={props.name} />
				<div className="tw-grid tw-content-between tw-w-full tw-h-auto tw-p-4 tw-bg-gray-50" style={{'height': '42%'}}>
					<CardRecipeName name={props.name} />
					<CardRating thumbsUp={props.thumbsUp} thumbsDown={props.thumbsDown} />
				</div>
			</Link>
		</div>
	)
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	idRecipe: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired,
	thumbsUp: PropTypes.number.isRequired,
	thumbsDown: PropTypes.number.isRequired
}

const CardImage = (props) => {
	return(
		<Image
			alt={props.alt}
			src={props.src}
			styling="tw-h-56 tw-w-full tw-object-cover"
		/>
	)
}

CardImage.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.object.isRequired,
}

const CardRecipeName = (props) => {
	return(
		<Paragraph className="tw-text-xl tw-font-medium tw-mb-2">
			{props.name}
		</Paragraph>
	)
}

CardRecipeName.propTypes = {
	name: PropTypes.string.isRequired,
}

const CardRating = (props) => {
	return(
		<div className="tw-flex tw-justify-end tw-w-full">
			<div className="tw-grid tw-grid-cols-2 gap-2 tw-justify-items-end tw-items-center tw-mr-4">
				<ThumbsUp />
				{props.thumbsUp}
			</div>
			<div className="tw-grid tw-grid-cols-2 gap-2 tw-justify-items-end tw-items-center">
				<ThumbsDown />
				{props.thumbsDown}
			</div>
		</div>
	)
}

CardRating.propTypes = {
	thumbsUp: PropTypes.number.isRequired,
	thumbsDown: PropTypes.number.isRequired
}

export default Card