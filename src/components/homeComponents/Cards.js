import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import Images from "../../pseudoDb/images"
import { useState } from "react"

function Cards(props) {
    const cardImg = Images.images[props.id].url
    const viewDetails = "VIEW DETAILS";
    const [text, setText] = useState(props.title)

    return(
        <Col md={4} className="p-5">
            <Card className="border-0">
                <Card.Img variant="top" src={cardImg} />
                <Card.Body className="p-0">
                    <Button variant="light" onMouseEnter={
                        () =>  {
                            setText(viewDetails)
                            console.log("enter")
                        }} onMouseLeave={
                        () => {
                            setText(props.title)
                            console.log("leave")
                        }} className="cardBtn py-3">{text}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards