import React from "react"
import PropTypes from "prop-types"

export default function PropyTypes(props) {
  return (
    <div>
      <h1>Coming form proptype comp . </h1>
      <h1>Prop is = {props.name}</h1>
      <h1>Num prop is = {props.number}</h1>
    </div>
  )
}

PropyTypes.defaultProps = {
  name: "Default prop",
  number: 22
}
