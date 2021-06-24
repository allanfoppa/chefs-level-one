import React from 'react'
import PropTypes from 'prop-types'

export const RecipeDetailContext = React.createContext({})

export const RecipeDetailProvider = (props) => {

	const [ name, setName ] = React.useState('')

	return(
		<RecipeDetailContext.Provider
			value={{
				name,
				setName
			}}
		>
			{props.children}
		</RecipeDetailContext.Provider>
	)
}

RecipeDetailProvider.propTypes = {
	children: PropTypes.node.isRequired
}