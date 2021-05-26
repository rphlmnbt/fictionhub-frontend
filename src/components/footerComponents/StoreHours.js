import React from "react"
import Col from "react-bootstrap/Col"

function StoreHours() {
    return(
        <Col lg={3} className="footer-items">
            STAY CONNECTED
            <br/>
            <div className="mt-3">
                <div className="footer-text">
                    San Fdo Branch
                    <br />
                    Open Mon - Fri
                    <br />
                    9 AM - 6 PM
                    <br />
                    Open Sat - Sun
                    <br  />
                    10 AM - 6 PM
                </div>
            </div>
        </Col>
    )
}

export default StoreHours