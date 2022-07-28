import React from "react";

import carousel_foto1 from '../../imagens/bibliotecamo2.png'
import carousel_foto2 from '../../imagens/banner3.png'
import carousel_foto3 from '../../imagens/bibliotecaIfc.jpg'

import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import styles from '../layout/carousel.module.css';
//<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
	//		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		//	<span class="sr-only">Previous</span>
	//	</a>
		//<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
		//	<span class="carousel-control-next-icon" aria-hidden="true"></span>
		//	<span class="sr-only">Next</span>
		//</a>

const my_Carousel = () =>
{
    return(
        <Carousel>
            <CarouselItem>
                <img class="d-block w-100" src={carousel_foto1} alt="biblioteca"/>
            
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
                <img class="d-block w-100" src={carousel_foto2} alt="biblioteca2"/>
                <div className={`${styles.Container}`}>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p><a class="" href="https://www.google.com" role="button">Browse gallery</a></p>
                </Carousel.Caption>
                </div>
            </CarouselItem>

            <CarouselItem>
                <img class="d-block w-100" src={carousel_foto3} alt="biblioteca3"/>
            
                <Carousel.Caption>
                        <h1>NOVIDADES EM BREVE</h1>
					    <p>...</p>
                </Carousel.Caption>
            </CarouselItem>
		
	
		
	
    </Carousel>
    )
}


export default my_Carousel;