import React from "react"
import { Link } from "react-router-dom"

import ImageLogo from '../assets/images/logo.png'

import { FullContainer, Container} from '../components/Layout/Container'
import Image from '../components/Media/Image'
import Heading from '../components/Foundation/Heading'
import NoContent from '../components/Layout/NoContent'
import Grid from '../components/Layout/Grid'
import { Paragraph, Span } from "../components/Foundation/Typography"

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
                    level={2}
                    styling="tw-font-sans tw-text-4xl tw-pb-12"
                />
                {showNoContent
                    ? <NoContent message={message} />
                    : <Grid data={cards} />
                }
            </Container>
            <FullContainer
                styling="tw-bg-gray-50"
            >
                <Container
                    styling="tw-grid tw-justify-self-center tw-justify-center tw-py-6 tw-px-6 xl:tw-py-24 xl:tw-mt-8"
                >
                    <Heading
                        text="Gostou das nossa receitas?"
                        level={3}
                        styling="tw-font-sans tw-text-4xl tw-pb-12"
                    />
                    <Paragraph
                        styling="tw-font-sans tw-pb-12 tw-text-center"
                    >
                        Mande a sua clicando &nbsp;
                        <Link
                            to=""
                        >
                            <Span
                                styling="tw-text-blue-400"
                            >
                                aqui
                            </Span>
                        </Link>
                    </Paragraph>
                </Container>
            </FullContainer>
        </>
    )
}

export default Home