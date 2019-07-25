import React, { useState } from "react"
// import PropTypes from "prop-types"

export default function PropyTypes() {
  const [someState, setSomeState] = useState({
    name: "someName",
    title: "someTitle",
    number: 22
  })
  return (
    <div>
      <h1>{someState.name}</h1>
      <h1>{someState.title}</h1>
      <h1>{someState.number}</h1>
    </div>
  )
}
