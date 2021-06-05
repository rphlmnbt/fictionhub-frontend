import React from "react"
import { Container } from "react-bootstrap"
import ContactUsDescription from "../components/contactUsComponents/ContactUsDescription"
import ContactForm from "../components/contactUsComponents/ContactForm"
import SocialMediaLinks from "../components/contactUsComponents/SocialMediaLinks"
import MapLocation from "../components/contactUsComponents/MapLocation"
import "../styles/pages/ContactUs.css"


function ContactUs() {

    return (
        <Container className="bg-blue mx-auto px-5 py-5">
            <ContactUsDescription />
            <ContactForm />
            <SocialMediaLinks />
            <MapLocation />
        </Container>
    )
}

export default ContactUs