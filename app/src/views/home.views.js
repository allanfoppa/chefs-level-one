import React from "react"
import { Link } from "react-router-dom"

import ImageLogo from '../assets/images/logo.png'

import { FullContainer, Container} from '../components/Layout/Container'
import Image from '../components/Media/Image'
import Heading from '../components/Foundation/Heading'
import NoContent from '../components/Layout/NoContent'
import Grid from '../components/Layout/Grid'
import Card from '../components/Layout/Card'
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
        // eslint-disable-next-line
    }, [])

    const callGetCards = () => {
        getCards().then(response  => {
            if (response.status === 200) response.json().then((res) => { setCards(res.data) })
            if (response.status === 404) response.json().then((res) => { handleError(res) })
        })
    }

    const handleError = (res) => {
        console.log('caiu no handleError')
        setShowNoContent(true)
        setMessage(res.message)
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
                {showNoContent
                    ?   <NoContent message={message} />
                    :   <>
                            <Heading
                                text="Nossas receitas"
                                level={2}
                                styling="tw-font-sans tw-text-4xl tw-pb-12"
                            />
                            <Grid
                                styling="
                                    tw-grid
                                    tw-grid-cols-1
                                    md:tw-grid-cols-2
                                    xl:tw-grid-cols-3
                                    tw-gap-12
                                    xl:tw-gap-18"
                            >
                                {cards.map((d, index) => {
                                    return <Card
                                        key={index}
                                        id={d.id}
                                        image={d.image}
                                        name={d.name}
                                        thumbsUp={d.thumbs_up}
                                        thumbsDown={d.thumbs_down}
                                    />
                                })}
                            </Grid>
                        </>
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
                        styling="tw-font-sans tw-text-4xl tw-pb-6"
                    />
                    <Paragraph
                        styling="tw-font-sans tw-text-center"
                    >
                        Mande a sua clicando &nbsp;
                        <Link
                            to="enviar-receita"
                        >
                            <Span
                                styling="tw-text-blue-400"
                            >
                                <code className="tw-font-bold tw-underline tw-text-base">
                                    aqui
                                </code>
                            </Span>
                        </Link>
                    </Paragraph>
                </Container>
            </FullContainer>
        </>
    )
}

export default Home