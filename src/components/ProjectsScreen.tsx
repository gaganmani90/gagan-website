import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

const TWITTER_TRENDS = "https://trending-topic-demo.herokuapp.com";
const DOYOURBEST = "https://do-your-best-app.herokuapp.com";
const GAGAN_WEBSITE = "https://gagan-website.herokuapp.com";
export const ProjectsScreen = () => {
    return (
        <Container>
            <ListGroup>
                <ListGroupItem><a href={TWITTER_TRENDS}>Twitter Trends</a> </ListGroupItem>
                <ListGroupItem><a href={DOYOURBEST}>Do Your Best</a></ListGroupItem>
                <ListGroupItem><a href={GAGAN_WEBSITE}>Gagan Website</a></ListGroupItem>
            </ListGroup>
        </Container>
    )
}