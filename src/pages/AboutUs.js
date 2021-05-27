import React from "react"
import { Container } from "react-bootstrap"
import AboutUsDescription from "../components/aboutUsComponents/AboutUsDescription"
import Vision from "../components/aboutUsComponents/Vision"
import Mission from "../components/aboutUsComponents/Mission"

import Images from "../pseudoDb/images"

function AboutUs() {
    const founderImg = Images.images[6].url
    const logo = Images.images[0].url

    return (
        <Container className="bg-blue mx-auto px-5 py-5">
            <AboutUsDescription founderImg={founderImg} />
            <Mission logo={logo}/>
            <Vision logo={logo}/>
        </Container>
    )
}

export default AboutUs