import React from "react"
import Navbar from "../components/Navbar"
import Landing from "../components/Landing"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Contactus from "../components/Contactus"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <Navbar />
      <Landing />
      <Skills />
      <Portfolio />
      <About />
      <Contactus />
    </div>
  )
}
