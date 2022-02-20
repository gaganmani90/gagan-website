import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const GOOGLE_FORM = "https://forms.gle/6cnt247ZzATqergc9"
const FACEBOOK_PAGE = "https://www.facebook.com/zplusedu"
export const MentorshipScreen = () => {
    return(
        <Container>
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzplusedu%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
                    scrolling="no" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </Container>
    )
}