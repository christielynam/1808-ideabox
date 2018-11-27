import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const IdeaContainer = ({ ideas, removeIdea }) => {
  const ideaCards = ideas.map(idea => (
    <Card {...idea} removeIdea={removeIdea} key={idea.id} />
  ))
  return(
    <div>
      {ideaCards}
    </div>
  )
}

IdeaContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default IdeaContainer