import { useEffect, useState } from "react"

import { endpointHome } from '../../services/endpoints'

import Heading from "../../components/Foundation/Heading"

const Home = () => {

    let carouselList = []

    const [ carousel, setCarousel ] = useState([])
    const [ cards, setCards ] = useState([])

    const populateCarousel = (arr) => {
        for (const iterator of arr) if(iterator.spotlight) carouselList.push(iterator)
        console.log('Carrosel', carouselList)
        return carouselList
    }

    const populateHome = async () => {
        let data = await fetch(endpointHome)
        let dataJSON = await data.json()
        console.log(dataJSON)
        let popCarousel = populateCarousel(dataJSON.data)
        let popCards = dataJSON.data
    }

    useEffect(() => {
        populateHome()
    }, [])

    return(
        <div>
            <p>Home</p>
            {/* <ul>
                {rec.map((item, index) =>
                    <li key={index}>
                        {item.name}
                    </li>
                )}
            </ul> */}
            <Heading
                text="Receitas"
                level={1}
                styling="my-title"
            />
        </div>
    )
}

export default Home