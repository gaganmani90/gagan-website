import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

export const HobbiesScreen = () => {
    return(
        <Container>
            <ListGroup>
                <ListGroupItem>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QhJZOMk0w1I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe></ListGroupItem>
                <ListGroupItem>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tHf1G7I5VhA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </ListGroupItem>
                <ListGroupItem>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r0KdZQ0wR5A"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </ListGroupItem>
            </ListGroup>
        </Container>
    )
}