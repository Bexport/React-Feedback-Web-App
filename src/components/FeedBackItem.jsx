import React from 'react'
//import { useState } from 'react' //hooks allow functional components to have access to state and other features and is used to track different values and shit 
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit}from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackItem({item}) { 
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    //classname styling is coming from the global styling sheet in index.css so just look for it 
  return (
    <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button onClick = {()=> deleteFeedback(item.id)} className="close"> 
            <FaTimes color="purple" />
        </button>
        <button onClick={()=>editFeedback(item)}className="edit">
            <FaEdit color="purple" />
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

FeedBackItem.propTypes={
    item: PropTypes.object.isRequired,
}


export default FeedBackItem