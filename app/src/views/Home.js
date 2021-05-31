import React from "react"

import {
    endpointHome
} from '../constants/endpoint'

import {
    IMAGE_LOGO,
    COMP_LAYOUT_CARD,
    COMP_LAYOUT_CAROUSEL,
    COMP_LAYOUT_NOCONTENT,
    COMP_LAYOUT_CONTAINER,
    COMP_MEDIA_IMAGE,
    UTIL_HANDLE_CREATE_NEW_ARRAY_WITH_CONDITION
} from '../config/import'

import {
    app_title
} from '../constants/string'

const Home = () => {

    const [ state, setState ] = React.useState({
        carousel: [],
        cards: [],
        showNoContent: false
    })

    const { carousel, cards, showNoContent } = state

    React.useEffect(() => {
        const populatePage = async () => {
            await fetch(endpointHome)
            .then((response) => {
                if (response.status === 200) response.json().then((res) => { handlePopulate(res.data) })
                if (response.status === 204) handleNoContent()
            })
            .catch((error) => {
                console.log('Houve um problema com a requisição Fetch: ' + error.message)
            })
        }

        populatePage()
    }, [])

    const handleNoContent = () => {
        setState({showNoContent: true})
    }

    const handlePopulate = (res) => {
        setState({carousel: UTIL_HANDLE_CREATE_NEW_ARRAY_WITH_CONDITION(res, 'spotlight')})
        setState({cards: res})
    }

    return(
        <>
            <COMP_LAYOUT_CONTAINER
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-5"
            >
                <COMP_MEDIA_IMAGE
                    src={IMAGE_LOGO}
                    alt={app_title}
                    styling="tw-w-48 md:tw-w-1/6"
                />
            </COMP_LAYOUT_CONTAINER>
            <COMP_LAYOUT_CAROUSEL data={carousel} />
            {showNoContent
                ? <COMP_LAYOUT_NOCONTENT />
                : <COMP_LAYOUT_CARD data={cards} />
            }
        </>
    )
}

export default Home