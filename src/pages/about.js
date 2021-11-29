// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>I love pokemon</p>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage