import React, { Fragment } from "react"
import "./App.scss"
import PropyTypes from "./components/PropyTypes"

function App() {
  return (
    <Fragment>
      {/* <PropyTypes name="Kiran prop" number="27" /> */}
      <PropyTypes another="string" />
    </Fragment>
  )
}

export default App
