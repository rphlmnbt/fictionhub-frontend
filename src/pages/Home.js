import React from "react"
import FeaturedBanner from "../components/homeComponents/FeaturedBanner"
import NewReleases from "../components/homeComponents/NewReleases"
import "../styles/pages/Home.css"

function Home() {
    return (
        <div>
            <FeaturedBanner />
            <NewReleases />
        </div>
    )
}

export default Home