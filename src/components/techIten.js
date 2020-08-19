import React from 'react'
import PropTypes from 'prop-types'

function TechIten({tech, onDelete}) {
  return (
  <li>
    {tech}
    <button onClick={onDelete} type="button">Remover</button>
  </li>)
}

TechIten.defaultProps = {
  tech: 'Não digitado'
}

TechIten.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechIten;