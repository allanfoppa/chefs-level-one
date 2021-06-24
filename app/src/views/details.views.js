import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { HandleErrorContext } from '../contexts/HandleError.context'
import { RecipeDetailContext, RecipeDetailProvider } from '../contexts/RecipeDetail.context'

import { getRecipeById } from '../services/getRecipeById'

import Header from '../components/Layout/Header'
import { Container } from '../components/Layout/Container'
import RecipePrepInfo from '../components/Layout/RecipePrepInfo'
import RecipeInfoList from '../components/Layout/RecipeInfoList'
import NutritionFacts from '../components/Layout/NutritionFacts'
import Divider from '../components/Layout/Divider'
import NoContent from '../components/Layout/NoContent'
import Heading from '../components/Foundation/Heading'
import { Paragraph } from '../components/Foundation/Typography'
import Image from '../components/Media/Image'


const RecipeName = ({name}) => {
	return(
		<Heading
			level={1}
			text={name}
			styling="tw-text-4xl md:tw-text-5xl"
		/>
	)
}

RecipeName.propTypes = {
	name: PropTypes.string.isRequired
}

export default function RecipeDetails(props) {

	const history = useHistory()

	const [ intro, setIntro ] = React.useState('')
	const [ image, setImage ] = React.useState('')
	const [ prepTime, setPrepTime ] = React.useState(0)
	const [ servings, setServings ] = React.useState(0)
	const [ nutritionFacts, setNutritionFacts ] = React.useState([])
	const [ ingredients, setIngredients ] = React.useState([])
	const [ instructions, setInstructions ] = React.useState([])

	const { showNoContent, message } = React.useContext(HandleErrorContext)
	const { name, setName } = React.useContext(RecipeDetailContext)
	// const { showNoContent, message, setShowNoContent, setMessage } = React.useContext(HandleErrorContext)

	React.useEffect(() => {
		if (props.location.recipeId) {
			const recipeId = props.location.recipeId

			getRecipeById(recipeId).then(response  => {
				if (response.status === 200) response.json().then((res) => { callSetData(res.data[0]) })
				if (response.status === 404) () => { history.push('/') }
			})

		}

		else history.push('/')

	}, [])

	const callSetData = recipe => {
		setName(recipe.name)
		setIntro(recipe.intro)
		setImage(recipe.image)
		setPrepTime(recipe.prep_time)
		setServings(recipe.servings)
		setNutritionFacts(recipe.nutrition_facts)
		setIngredients(recipe.ingredients)
		setInstructions(recipe.instructions)
	}

	return(
		<RecipeDetailProvider>
			<Header />
			<Container
				styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 xl:tw-px-48 xl:tw-mb-28"
			>
				{showNoContent
					?	<NoContent message={message} />
					:
					<>
						<RecipeName name={name} />
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
								<RecipeInfoList info={ingredients} title="Ingredientes" />
							</div>
							<div>
								<RecipeInfoList info={instructions} title="Instruções" />
							</div>
						</div>
					</>
				}
			</Container>
		</RecipeDetailProvider>
	)
}

RecipeDetails.propTypes = {
	location: PropTypes.object
}