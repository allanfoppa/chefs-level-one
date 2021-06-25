import React from 'react'
import PropTypes from 'prop-types'

export const HandleErrorContext = React.createContext({})

export const HandleErrorProvider = (props) => {

	const [ showNoContent, setShowNoContent ] = React.useState(false)
	const [ message, setMessage ] = React.useState('')

	return(
		<HandleErrorContext.Provider
			value={{
				showNoContent,
				setShowNoContent,
				message,
				setMessage
			}}
		>
			{props.children}
		</HandleErrorContext.Provider>
	)
}

HandleErrorProvider.propTypes = {
	children: PropTypes.node.isRequired
}