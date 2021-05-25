import React from "react"
import { Container } from "react-bootstrap"
import ContactForm from "./contactUsComponents/ContactForm"
import ContactUsDescription from "./contactUsComponents/ContactUsDescription"
import MapLocation from "./contactUsComponents/MapLocation"
import SocialMediaLinks from "./contactUsComponents/SocialMediaLinks"

function ContactUs() {

    return (
        <Container className="bgBlue mx-auto px-5 py-5">
            <ContactUsDescription />
            <ContactForm />
            <SocialMediaLinks />
            <MapLocation />
        </Container>
    )
}

export default ContactUs