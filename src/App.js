import React, { Fragment } from "react"
import "./App.scss"

function App() {
  const name = "Kiran"
  return (
    <Fragment>
      <h1>Japanican Mobile and App</h1>
      <h3>React Router</h3>
      <h3>React Redux</h3>
      <h3>TypeScript</h3>
      <hr />
      <h3>Post request</h3>
      <h3>Get request</h3>
      <h3>Search</h3>
      <h3>Sort</h3>
      <h1>{name}</h1>
    </Fragment>
  )
}

export default App
