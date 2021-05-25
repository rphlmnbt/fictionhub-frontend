import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Row, Col } from 'react-bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoicnBobG1uYnQiLCJhIjoiY2tnYnl3bXM5MDBscTM0cnpwbGwwZmNneCJ9.HjYTuuq_Cx8OwDsz31ZGsg';

function MapLocation() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(120.62);
    const [lat] = useState(15.09);
    const [zoom] = useState(14.5);

    useEffect(() => {
        if (map.current) return;
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
            });
    });

    return (
        <div>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col md={4} className="followText mx-auto">
                    FIND US HERE!
                    <br />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={4} className="formText" style={{fontSize:"18px"}}>
                Angeles City, Pampanga
                <br />
                500 Street in Angeles
                <br />
                Angeles, PAMP 2002
                <br />
                Phone: 123.456.7890
                <br /><br />
                Mon-Sat: 10:00am-7:00pm
                <br />
                Sunday: Closed
                <br /><br />
                <hr className="w-25" />
                <br /><br />
                City of San Fernando, Pampanga
                <br />
                500 Street in CSFP
                <br />
                City of San Fernando, PAMP 2000
                <br />
                Phone: 123.456.7890
                <br /><br />
                Mon-Fri: 9:00am-6:00pm
                <br />
                Sat-Sun: 10:00am-5:00pm
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <div ref={mapContainer} className="map-container" />
                </Col>
            </Row>
            
        </div>
        );

}
   
export default MapLocation;