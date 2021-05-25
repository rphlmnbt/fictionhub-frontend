import React from "react"
import { Container } from "react-bootstrap"
import Images from "../pseudoDb/images"
import Vision from "./aboutUsComponents/Vision"
import Mission from "./aboutUsComponents/Mission"
import AboutUsDescription from "./aboutUsComponents/AboutUsDescription"

function AboutUs() {
    const founderImg = Images.images[6].url
    const logo = Images.images[0].url

    return (
        <Container className="bgBlue mx-auto px-5 py-5">
            <AboutUsDescription founderImg={founderImg} />
            <Mission logo={logo}/>
            <Vision logo={logo}/>
        </Container>
    )
}

export default AboutUs