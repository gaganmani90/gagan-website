import {Carousel} from "react-bootstrap";
import {ZplusEduFacebookPage} from "./ZplusEduFacebookPage";

export const HomeScreen = () => {
    return(
        <Carousel variant="dark">
            <Carousel.Item>
                <ZplusEduFacebookPage />
            </Carousel.Item>
            <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/r0KdZQ0wR5A"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                <Carousel.Caption>
                    <h3>Magic Wand</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tHf1G7I5VhA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}