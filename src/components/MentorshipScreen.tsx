import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

const GOOGLE_FORM = "https://forms.gle/6cnt247ZzATqergc9"
export const MentorshipScreen = () => {
    return(
        <Container>
            <ListGroup>
                <h3>Mentorship Google Form</h3>
                <ListGroupItem><a href={GOOGLE_FORM}>Mentorship Google Form</a></ListGroupItem>
            </ListGroup>
        </Container>
    )
}