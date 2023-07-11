import React from "react"
import { useHistory } from "react-router-dom"

const Navbar = () => {
    let router = useHistory()

    return <div className="home-frame3126">
        <div className="home-frame3125">
            <span className="home-text cursor-pointer" onClick={() => router.push('/')}>
                <span>nurilratu</span>
            </span>
            <div className="home-menu-navbar">
                <span className="home-text002">
                    <span>Portfolio</span>
                </span>
                <span className="home-text004">
                    <span>Resume</span>
                </span>
            </div>
        </div>
        <img
            alt="BorderBottomNavbar2131"
            src="/external/borderbottomnavbar2131-5q6p.svg"
            className="home-border-bottom-navbar"
        />
    </div>
}

export default Navbar