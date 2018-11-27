import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, body, id, removeIdea }) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>X</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default Card