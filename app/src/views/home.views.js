import React from "react"

import ImageLogo from '../assets/images/logo.png'

import Container from '../components/Layout/Container'
import Image from '../components/Media/Image'
import Heading from '../components/Foundation/Heading'
import NoContent from '../components/Layout/NoContent'
import Grid from '../components/Layout/Grid'

import {
    getCards
} from '../services/getCards.service'

import {
    app_title
} from '../constants/string'


const Home = () => {

    const [ cards, setCards ] = React.useState([])
    const [ showNoContent, setShowNoContent ] = React.useState(false)
    const [ message, setMessage ] = React.useState('')

    React.useEffect(() => {
        callGetCards()
    }, [])

    const callGetCards = () => {
        getCards().then(response  => {
            if (response.status === 200) response.json().then((res) => { setCards(res.data) })
            if (response.status === 404) response.json().then((res) => {
                setShowNoContent(true)
                setMessage(res.message)
            })
        })
    }

    return(
        <>
            <Container
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6 md:tw-pt-6 md:tw-pb-12"
            >
                <Image
                    src={ImageLogo}
                    alt={app_title}
                    styling="tw-w-48 md:tw-w-1/6"
                />
            </Container>
            <Container
                styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 xl:tw-px-48"
            >
                <Heading
                    text="Nossas receitas"
                    level={1}
                    styling="tw-font-sans tw-text-4xl tw-pb-12"
                />
                {showNoContent
                    ? <NoContent message={message} />
                    : <Grid data={cards} />
                }
            </Container>

        </>
    )
}

export default Home