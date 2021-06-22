import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../Foundation/Heading'
import Divider from '../Layout/Divider'
import StripedList from '../DataDisplay/StripedList'

export default function NutritionFacts({info}) {
	return(
		<div
			className="tw-p-4 tw-bg-gray-100"
		>
			<Heading
				level={3}
				text="Fatos Nutricionais"
			/>
			<Divider
				styling="tw-my-4"
			/>
			<StripedList info={info} />
		</div>
	)
}

NutritionFacts.propTypes = {
	info: PropTypes.array.isRequired
}