import React from 'react'
import PropTypes from 'prop-types'

export default function List({info}){
	return(
		<ul>
			{info.map((e, index) => {
				return(
					<li
						key={index}
						className="tw-flex-1 tw-mb-4"
					>
						{Object.getOwnPropertyNames(e)}: {Object.values(e)}
					</li>
				)
			})}
		</ul>
	)
}

List.propTypes = {
	info: PropTypes.array.isRequired
}