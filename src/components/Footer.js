import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SocialIcons from "./footerComponents/SocialIcons"
import BeOurFriend from "./footerComponents/BeOurFriend"
import NeedAssistance from "./footerComponents/NeedAssistance"
import StoreHours from "./footerComponents/StoreHours"

function Footer() {
    return (
        <Container className="footer">
            <Row>
                <SocialIcons />
                <BeOurFriend />
                <NeedAssistance />
                <StoreHours />
            </Row>
        </Container>
    )
}

export default Footer