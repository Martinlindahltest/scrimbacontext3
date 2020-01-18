import React from "react"
import { ThemeContextConsumer } from "./userContext"

function Header() {
    return (
        <header>
            headerheader
            <ThemeContextConsumer>
                {username => (
                    <p>Welcome, {username}!</p>
                )}
            </ThemeContextConsumer>
        </header>
    )
}

export default Header
