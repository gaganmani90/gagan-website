import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

const QUORA = "https://www.quora.com/profile/Gagan-Mani"
const FACEBOOK = "https://www.facebook.com/gaganmani90"
const INSTAGRAM = "https://www.instagram.com/gaganmani/"
const YOUTUBE = "https://www.youtube.com/c/gaganmani/featured"
export const ContactScreen = () => {
    return(
        <Container>
            <ListGroup>
                <ListGroupItem><a href={QUORA}>Quora</a></ListGroupItem>
                <ListGroupItem><a href={FACEBOOK}>Facebook</a></ListGroupItem>
                <ListGroupItem><a href={INSTAGRAM}>Instagram</a></ListGroupItem>
                <ListGroupItem><a href={YOUTUBE}>Youtube</a></ListGroupItem>
            </ListGroup>
        </Container>
    )
}