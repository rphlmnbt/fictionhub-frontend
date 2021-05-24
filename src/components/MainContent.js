import React from "react"
import FeaturedBanner from "./homeComponents/FeaturedBanner"
import NewReleases from "./homeComponents/NewReleases"

function MainContent() {
    return (
        <div>
            <FeaturedBanner />
            <NewReleases />
        </div>
    )
}

export default MainContent