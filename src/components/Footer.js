import React from "react"
import { Container, Row } from "react-bootstrap"
import SocialIcons from "./footerComponents/SocialIcons"
import BeOurFriend from "./footerComponents/BeOurFriend"
import NeedAssistance from "./footerComponents/NeedAssistance"
import StoreHours from "./footerComponents/StoreHours"
import "../styles/components/Footer.css"

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