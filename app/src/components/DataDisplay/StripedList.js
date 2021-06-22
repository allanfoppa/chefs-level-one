import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from '../Foundation/Typography'

export default function StripedList({info}){
	return(
		<ul>
			{info.map((e, index) => {
				return(
					<li
						key={index}
						className="tw-flex tw-flex-auto tw-py-2 tw-my-2"
					>
						<Paragraph styling="tw-flex-1">{Object.getOwnPropertyNames(e)}:</Paragraph>
						<Paragraph styling="tw-flex-1 tw-text-right">{Object.values(e)}</Paragraph>
					</li>
				)
			})}
		</ul>
	)
}

StripedList.propTypes = {
	info: PropTypes.array.isRequired
}