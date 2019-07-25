import React from "react"
import PropTypes from "prop-types"

export default function ListItem(props) {
  return (
    <div
      style={{
        boxShadow: "0px 4px 6px #A0A0A0",
        padding: "10px",
        margin: "24px"
      }}
    >
      <h3>{props.item.name}</h3>
      <h3>{props.item.email}</h3>
      <h3>{props.item.phone}</h3>
      <h3>{props.item.website}</h3>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object
}
