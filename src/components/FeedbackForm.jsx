import React, { useContext, useEffect } from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

//The Feedback card at the top of the website where the user puts in their rating and comments.
function FeedbackForm() {
    const[text,setText] = useState('')    
    const[rating,setRating] = useState(10)    
    const[btnDisalbed,setBtnDisabled] = useState(true)    
    const[message,setMessage] = useState('')   
    
    const {addFeedback, feedbackEdit , updateFeedback} = useContext(FeedbackContext)

    //side effect with a dependency whenever we click on the edit
    useEffect(()=>{
          if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
          }
    }, [feedbackEdit])

    // e is the event handler and will just check whenever the text box has been updated and shit
    const handleTextChange = (e)=>{ 
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <=10){
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters.")
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault() //prevent from submitting to the actual file
        if(text.trim().length>10){
            const newFeedback={ 
                text,
                rating, 
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback)
            }
            //reset back to default values
            setBtnDisabled(true)
            setRating(10)
            setText('')
        }
    } 
  
  return (
    <Card>
        <form onSubmit={handleSubmit}> 
            <h2>How would you rate your service with us?</h2>
            {/* (shortcut for this is ctrl + /) */}
            <RatingSelect select={(rating)=> setRating(rating)} selected={rating}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <Button type="submit" isDisabled={btnDisalbed}>
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm