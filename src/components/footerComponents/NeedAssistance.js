import React from "react"
import { Col } from "react-bootstrap"

function NeedAssistance() {
    return(
        <Col lg={3} className="footer-items">
            NEED ASSISTANCE?
            <br/>
            <div className="mt-3">
                <div className="footer-text">
                    fictionhub@gmail.com
                    <br />
                    123-456-789
                </div>
            </div>
        </Col>
    )
}

export default NeedAssistance