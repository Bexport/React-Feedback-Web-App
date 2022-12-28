//used to keep track of different states so we don't have to use prop drilling and will have to be implemented to 
//every single component that uses the thing 
import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid' 


const FeedbackContext = createContext()

//Feedback provider allows us to access the states of different stuff to wrap components in 
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([ //pass this down to components down that need it 
        {
        id: 1,
        text: 'This is feedback item 1',
        rating: 10
        },

        {
        id: 2,
        text: 'This is feedback item 2',
        rating: 8
        },

        {
        id: 3,
        text: 'This is feedback item 3',
        rating: 6
        }
    ])

    //used to track and update the item that we want to update upon clicking the edit button 
    const[feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,  
    })

    //uuidv4 generates a new unique idea for every new feedback item added into the feedbacklist 
    //setFeedback takes all previous feedback into an array after the new feed back added
    const addFeedback=(newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) 
    }

    //this method generates a new array minus current feedback that is the same as the id argument passed in
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id)) //filter is an array method you call on an array and it loops through with a condition to filter something out
        }
    } 

    //set the item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //updates the actual feedbackitem
    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem}:item))
    }

    return <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext