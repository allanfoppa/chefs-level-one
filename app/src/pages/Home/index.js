import React from "react"

import { endpointHome } from '../../config/endpoints'

import Card from '../../components/Layout/Card'
import CarouselComponent from '../../components/Layout/Carousel'
import NoContent from '../../components/Layout/NoContent'
import Container from '../../components/Layout/Container'
import Image from '../../components/Media/Image'

import '../../assets/styles/home_page.css'

import handleCreateNewArrayWithCondition from '../../utils/handleCreateNewArrayWithCondition'

import logo from '../../assets/images/logo.png'

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
        let popCarousel = handleCreateNewArrayWithCondition(res, 'spotlight')
        let popCards = res
        setState({carousel: popCarousel})
        setState({cards: popCards})
    }

    return(
        <div id="layout-home">
            <Container styling="layout-home__logo-container">
                <Image
                    src={logo}
                    alt="Chef's Level One"
                />
            </Container>
            <CarouselComponent data={carousel} />
            <Container>
                {showNoContent
                    ? <NoContent />
                    : <Card data={cards} />
                }
            </Container>
        </div>
    )
}

export default Home