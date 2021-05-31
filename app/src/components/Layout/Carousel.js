import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Image from '../Media/Image'

const CarouselComponent = (props) => {
    // console.log('Ja no component Carousel', props.data)
    return(
        <Carousel
			autoPlay={true}
			showThumbs={false}
			dynamicHeight={true}
			showStatus={false}
			emulateTouch={true}
		>
			<div>
				<Image src="http://localhost:3333/images/almondegas.jpg" alt="teste" styling="carousel-image" />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<Image src="http://localhost:3333/images/moqueca.jpg" alt="teste" styling="carousel-image" />
				<p className="legend">Legend 2</p>
			</div>
		</Carousel>
    )
}

export default CarouselComponent