import React, { useState } from "react"
import { Col, Button, Card } from "react-bootstrap"
import Images from "../../pseudoDb/images"

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
                        }} onMouseLeave={
                        () => {
                            setText(props.title)
                        }} className="card-btn py-3">{text}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards