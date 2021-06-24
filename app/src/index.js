import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/'

import './assets/styles/global.css'

import { HandleErrorProvider } from './contexts/HandleError.context'

ReactDOM.render(
	<React.StrictMode>
		<HandleErrorProvider>
			<Routes />
		</HandleErrorProvider>
	</React.StrictMode>, document.getElementById('root')
)