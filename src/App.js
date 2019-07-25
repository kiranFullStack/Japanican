import React, { Fragment, useState } from "react"
import "./App.scss"
import Lists from "./components/Lists"
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)

  const url = "https://jsonplaceholder.typicode.com/todos/1"
  // axios.get(url).then(
  //   response => {
  //     console.log(response)
  //   },
  //   error => {
  //     console.log(error)
  //   }
  // )
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
  return <Fragment>{!loading ? "Loading..." : <Lists />}</Fragment>
}

export default App
