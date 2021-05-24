import React from "react"
import Images from "../../pseudoDb/images"

function Logo(props) {
    const logoUrl = Images.images[0].url;

    return (
        <img 
            src={logoUrl} 
            alt="FHLogo"
            style={{padding : "10px"}}
            height={props.height}
        />
    )
}

export default Logo