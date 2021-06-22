import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../Foundation/Heading'
import List from '../DataDisplay/List'

export default function RecipeInfoList({info}){
	return(
		<>
			<Heading
				level={3}
				text="Ingredientes"
				styling="tw-text-4xl tw-mb-4"
			/>
			<List info={info} />
		</>
	)
}

RecipeInfoList.propTypes = {
	info: PropTypes.array.isRequired
}