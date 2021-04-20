import React from "react"

import { endpointHome } from '../../config/endpoint'

import {
    IMAGE_LOGO,
    COMP_LAYOUT_CARD,
    COMP_LAYOUT_CAROUSEL,
    COMP_LAYOUT_NOCONTENT,
    COMP_LAYOUT_CONTAINER,
    COMP_MEDIA_IMAGE,
    UTIL_HANDLE_CREATE_NEW_ARRAY_WITH_CONDITION
} from '../../config/import'


import '../../assets/styles/home_page.css'

import {
    app_title
} from '../../config/string'

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
        let popCarousel = UTIL_HANDLE_CREATE_NEW_ARRAY_WITH_CONDITION(res, 'spotlight')
        let popCards = res
        setState({carousel: popCarousel})
        setState({cards: popCards})
    }

    return(
        <div id="layout-home">
            <COMP_LAYOUT_CONTAINER styling="layout-home__logo-container">
                <COMP_MEDIA_IMAGE
                    src={IMAGE_LOGO}
                    alt={app_title}
                />
            </COMP_LAYOUT_CONTAINER>
            <COMP_LAYOUT_CAROUSEL data={carousel} />
            {showNoContent
                ? <COMP_LAYOUT_NOCONTENT />
                : <COMP_LAYOUT_CARD data={cards} />
            }
        </div>
    )
}

export default Home