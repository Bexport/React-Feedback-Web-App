import React from 'react'
import PropTypes from 'prop-types'

//we create a JSX card component that can be used wherever and however we want without having to div class name'card' everytime
//the div classname uses a template string to do string interpolation (in our case we use it as a conditional to see if we want to switch
//to another card style). In java, it's like string = "a" + string2
function Card({children, reverse}) {
//  BELOW IS AN EXAMPLE OF A CONDITIONAL CLASS
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )

//  THIS IS AN EXAMPLE OF A CONDITIONAL STYLING (it's all up to preference to see what you want to do) 
    return(
        <div className = 'card' style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}>
            {children}
        </div>
    )
}

Card.defaultProps={
    reverse: false,
}

Card.propTypes={
    children: PropTypes.node.isRequired, //.node is anything that can be rendered 
    reverse: PropTypes.bool,
}

export default Card