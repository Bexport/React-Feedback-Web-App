import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() { //feedback is the entire array

  const {feedback} = useContext(FeedbackContext)

    //Rating avg calculation
    //the array.reduce method reduces the array to a single value and executes a provided function for each value of the array 
    //and the return value of the function is stored in an accumulator
    //current value (cur) is defaulted to 0
    let average = feedback.reduce((acc,cur)=>{ 
        return acc + cur.rating },0) / feedback.length

    //limit the average to 1 decimal place and replaces all trialing 0's with nothing
    average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 :  average}</h4>
    </div>
  )
}

export default FeedbackStats