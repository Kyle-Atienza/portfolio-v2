import React from 'react'

import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Experience />
            <Projects />
            <Contact />
            <Footer /> 
        </div>
    )
}

export default Home
