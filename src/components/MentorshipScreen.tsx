import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {ZplusEduFacebookPage} from "./ZplusEduFacebookPage";

const GOOGLE_FORM = "https://forms.gle/6cnt247ZzATqergc9"
const FACEBOOK_PAGE = "https://www.facebook.com/zplusedu"
export const MentorshipScreen = () => {
    return(
        <Container fluid>
                <ZplusEduFacebookPage />
        </Container>
    )
}