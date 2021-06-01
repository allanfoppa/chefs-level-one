import React from "react"

import {
    endpointHome
} from '../constants/endpoint'

import {
    IMAGE_LOGO,
    COMP_LAYOUT_NOCONTENT,
    COMP_LAYOUT_CONTAINER,
    COMP_LAYOUT_MASONRY,
    COMP_MEDIA_IMAGE,
} from '../config/import'

import {
    app_title
} from '../constants/string'

const Home = () => {

    const [ state, setState ] = React.useState({
        cards: [],
        showNoContent: false,
        message: ''
    })

    const { cards, showNoContent, message } = state

    React.useEffect(() => {
        const populatePage = async () => {
            await fetch(endpointHome)
            .then((response) => {
                if (response.status === 200) response.json().then((res) => { setState({cards: res.data}) })
                if (response.status === 404) response.json().then((res) => { setState({showNoContent: true, message: res.data.message}) })
            })
            .catch((error) => {
                console.log('Houve um problema com a requisição Fetch: ' + error.message)
            })
        }

        populatePage()
    }, [])

    return(
        <>
            <COMP_LAYOUT_CONTAINER
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6"
            >
                <COMP_MEDIA_IMAGE
                    src={IMAGE_LOGO}
                    alt={app_title}
                    styling="tw-w-48 md:tw-w-1/6"
                />
            </COMP_LAYOUT_CONTAINER>
            <COMP_LAYOUT_CONTAINER
                styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6"
            >
                {showNoContent
                    ? <COMP_LAYOUT_NOCONTENT message={message} />
                    : <COMP_LAYOUT_MASONRY data={cards} />
                }
            </COMP_LAYOUT_CONTAINER>

        </>
    )
}

export default Home