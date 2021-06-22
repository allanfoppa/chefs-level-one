import React from 'react'
import { Link } from 'react-router-dom'
import ImageLogo from '../../assets/images/logo.png'

import { Container} from './Container'
import Image from '../Media/Image'

import { app_title } from '../../constants/string'

export default function Header() {
	return(
		<Container
			styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6 md:tw-pt-6 md:tw-pb-12"
		>
			<Link to="/">
				<Image
					src={ImageLogo}
					alt={app_title}
					styling="tw-w-48"
				/>
			</Link>
		</Container>
	)
}