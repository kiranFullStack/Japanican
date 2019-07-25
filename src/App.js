import React, { Fragment } from "react"
import "./App.scss"
import PropTypes from "prop-types"
import PropyTypes from "./components/PropyTypes"

function App() {
  const name = "staaaaaaa"
  const shouldYouShowName = false
  return (
    <Fragment>
      {/* <PropyTypes name="Kiran prop" number="27" /> */}
      <PropyTypes number="voer" />
    </Fragment>
  )
}

export default App
