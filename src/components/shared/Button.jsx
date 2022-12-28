import React from 'react'
import PropTypes from 'prop-types'

//wrapping component around the text which is the children
// will have primary and secordary versions for specific class of button and will change color accordingly
// type of button 
// isDisabled is a boolean: true means isDisabled
function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false,
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button