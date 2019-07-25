import React, { Fragment } from "react"
import "./App.scss"

function App() {
  const name = "staaaaaaa"
  const shouldYouShowName = false
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
      {name.length > 3 ? (
        <h1>{name.toUpperCase()}</h1>
      ) : (
        <h1>{name.toLowerCase()}</h1>
      )}
      {shouldYouShowName && name}
    </Fragment>
  )
}

export default App
