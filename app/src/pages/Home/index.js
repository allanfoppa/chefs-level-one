import { useEffect, useState } from "react"

import { endpointHome } from '../../services/endpoints'

import Image from '../../components/Media/Image'
import CarouselComponent from '../../components/Layout/Carousel'
import Container from '../../components/Layout/Container'

import '../../assets/styles/home_page.css'

import handleCreateNewArrayWithCondition from '../../helpers/handleCreateNewArrayWithCondition'

import logo from '../../assets/images/logo.png'

const Home = () => {

    const [ carousel, setCarousel ] = useState([])
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        const populateHome = async () => {
            let data = await fetch(endpointHome)
            let dataJSON = await data.json()
            console.log(dataJSON)
            let popCarousel = handleCreateNewArrayWithCondition(dataJSON.data, 'spotlight')
            let popCards = dataJSON.data
            setCarousel(popCarousel)
            setCards(popCards)
        }
        populateHome()
    }, [])

    return(
        <div id="layout-home">
            <Container styling="layout-home__logo-container">
                <Image
                    src={logo}
                    alt="Chef's Level One"
                />
            </Container>
            <CarouselComponent data={carousel} />
        </div>
    )
}

export default Home