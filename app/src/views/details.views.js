/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { getRecipeById } from '../services/getRecipeById'

import Header from '../components/Layout/Header'
import { Container } from '../components/Layout/Container'
import Heading from '../components/Foundation/Heading'
import Image from '../components/Media/Image'
import { Paragraph } from '../components/Foundation/Typography'
import RecipePrepInfo from '../components/Layout/RecipePrepInfo'
import RecipeInfoList from '../components/Layout/RecipeInfoList'
import Divider from '../components/Layout/Divider'
import NutritionFacts from '../components/Layout/NutritionFacts'

export default function RecipeDetails(props) {

	const history = useHistory()

	const [ name, setName ] = React.useState('')
	const [ intro, setIntro ] = React.useState('')
	const [ image, setImage ] = React.useState('')
	const [ prepTime, setPrepTime ] = React.useState(0)
	const [ servings, setServings ] = React.useState(0)
	const [ nutritionFacts, setNutritionFacts ] = React.useState([])
	const [ ingredients, setIngredients ] = React.useState([])
	const [ instructions, setInstructions ] = React.useState([])

	React.useEffect(() => {
		if (props.location.recipeId) {
			const recipeId = props.location.recipeId

			getRecipeById(recipeId).then(response  => {
				if (response.status === 200) response.json().then((res) => {
					const recipe = res.data[0]

					setName(recipe.name)
					setIntro(recipe.intro)
					setImage(recipe.image)
					setPrepTime(recipe.prep_time)
					setServings(recipe.servings)
					setNutritionFacts(recipe.nutrition_facts)
					setIngredients(recipe.ingredients)
					setInstructions(recipe.instructions)
				})
				if (response.status === 404) response.json().then((res) => { console.log('Ola 2', res) })
			})

		} else {
			history.push('/')
		}
	}, [])

	return(
		<>
			<Header />
			<Container
				styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 xl:tw-px-48 xl:tw-mb-28"
			>
				<Heading
					level={1}
					text={name}
					styling="tw-text-4xl md:tw-text-5xl"
				/>
				<Divider
					styling="tw-my-8"
				/>
				<Paragraph
					styling="tw-text-1xl md:tw-text-2xl tw-mb-8"
				>
					{intro}
				</Paragraph>
				<div
					className="tw-grid tw-grid-flow-row tw-grid-cols-1 xl:tw-grid-flow-column xl:tw-grid-cols-2 tw-gap-4 tw-my-12"
				>
					{/* Rendered size:	568 × 420 px */}
					<Image
						src={image}
						alt={name}
					/>
					<div
						className="tw-grid tw-grid-flow-row tw-grid-row-2 tw-gap-4 lg:tw-ml-32 tw-auto-rows-max tw-mb-12"
					>
						<div
							className="tw-grid tw-grid-flow-column tw-grid-cols-2 tw-gap-4 lg:tw-gap-0 tw-mb-8"
						>
							<RecipePrepInfo title="TEMPO DE PREPARO" info={prepTime} showMinutes={true} />
							<RecipePrepInfo title="QTD PESSOAS" info={servings} />
						</div>
						<NutritionFacts info={nutritionFacts} />
					</div>
					<div>
						<RecipeInfoList info={ingredients} />
					</div>
					<div>
						<RecipeInfoList info={instructions} />
					</div>
				</div>
			</Container>
		</>
	)
}

RecipeDetails.propTypes = {
	location: PropTypes.object
}