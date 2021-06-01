import React from "react"

import {
    endpointHome
} from '../constants/endpoint'

import {
    IMAGE_LOGO,
    COMP_LAYOUT_NOCONTENT,
    COMP_LAYOUT_CONTAINER,
    COMP_LAYOUT_GRID,
    COMP_MEDIA_IMAGE,
} from '../config/import'

import {
    app_title
} from '../constants/string'

const Home = () => {

    const [ cards, setCards ] = React.useState([])
    const [ showNoContent, setShowNoContent ] = React.useState(false)
    const [ message, setMessage ] = React.useState('')

    React.useEffect(() => {
        const populatePage = async () => {
            await fetch(endpointHome)
            .then((response) => {
                if (response.status === 200) response.json().then((res) => { setCards(res.data) })
                if (response.status === 404) response.json().then((res) => {
                    setShowNoContent(true)
                    setMessage(res.data.message)
                })
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
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6 md:tw-pt-6 md:tw-pb-12"
            >
                <COMP_MEDIA_IMAGE
                    src={IMAGE_LOGO}
                    alt={app_title}
                    styling="tw-w-48 md:tw-w-1/6"
                />
            </COMP_LAYOUT_CONTAINER>
            <COMP_LAYOUT_CONTAINER
                styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 md:tw-px-48"
            >
                {showNoContent
                    ? <COMP_LAYOUT_NOCONTENT message={message} />
                    : <COMP_LAYOUT_GRID data={cards} />
                }
            </COMP_LAYOUT_CONTAINER>

        </>
    )
}

export default Home