import React from 'react'

import { Container} from '../components/Layout/Container'
import Header from '../components/Layout/Header'
import NoContent from '../components/Layout/NoContent'
import Grid from '../components/Layout/Grid'
import Card from '../components/Layout/Card'
import Heading from '../components/Foundation/Heading'

import {
	getCards
} from '../services/getCards.service'

import {
	recipes_container_title
} from '../constants/string'

export default function Home() {

	const [ cards, setCards ] = React.useState([])
	const [ showNoContent, setShowNoContent ] = React.useState(false)
	const [ message, setMessage ] = React.useState('')

	React.useEffect(() => {
		callGetCards()
	}, [])

	const callGetCards = () => {
		getCards().then(response  => {
			if (response.status === 200) response.json().then((res) => { setCards(res.data) })
			if (response.status === 404) response.json().then((res) => { handleError(res) })
		})
	}

	const handleError = (res) => {
		console.log('caiu no handleError')
		setShowNoContent(true)
		setMessage(res.message)
	}

	return(
		<>
			<Header />
			<Container
				styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 xl:tw-px-48 xl:tw-mb-28"
			>
				{showNoContent
					?	<NoContent message={message} />
					:	<>
						<Heading
							text={recipes_container_title}
							level={2}
							styling="tw-font-sans tw-text-4xl tw-pb-12"
						/>
						<Grid
							styling="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-12 xl:tw-gap-18"
						>
							{cards.map((d, index) => {
								return(
									<Card
										key={index}
										idRecipe={d.uuid}
										image={d.image}
										name={d.name}
										slug={d.slug}
										thumbsUp={d.thumbs_up}
										thumbsDown={d.thumbs_down}
									/>
								)
							})}
						</Grid>
					</>
				}
			</Container>
		</>
	)
}