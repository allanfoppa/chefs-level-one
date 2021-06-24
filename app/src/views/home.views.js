/* eslint-disable no-unused-vars */
import React from 'react'

import { Container} from '../components/Layout/Container'
import Header from '../components/Layout/Header'
import NoContent from '../components/Layout/NoContent'
import Grid from '../components/Layout/Grid'
import Card from '../components/Layout/Card'
import Heading from '../components/Foundation/Heading'

import { HandleErrorContext } from '../contexts/HandleError.context'

import {
	getCards
} from '../services/getCards.service'

import {
	recipes_container_title
} from '../constants/string'

export default function Home() {

	const [ cards, setCards ] = React.useState([])
	const { showNoContent, message, setShowNoContent, setMessage } = React.useContext(HandleErrorContext)

	React.useEffect(() => {
		getCardsService()
	}, [])

	const getCardsService = async () => {
		let response = await getCards()

		getCardsResponse(
			response.status,
			response.payload
		)

	}

	const getCardsResponse = (status, response) => {
		switch (status) {
		case 200:
			setCards(response.data)
			break
		case 404:
			setShowNoContent(true)
			setMessage(response.message)
			break
		default:
			return 'Houve um erro com a aplicação'
		}
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