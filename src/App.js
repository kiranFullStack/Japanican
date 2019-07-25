import React, { Fragment, useState } from "react"
import "./App.scss"
import Lists from "./components/Lists"
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)

  const url = "https://jsonplaceholder.typicode.com/todos/1"
  axios
    .get(url)
    .then(function(response) {
      setLoading(false)
      console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
    .finally(function() {
      // always executed
    })
  return <Fragment>{loading ? "Loading..." : <Lists />}</Fragment>
}

export default App
