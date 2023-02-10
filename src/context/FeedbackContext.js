//used to keep track of different states so we don't have to use prop drilling and will have to be implemented to 
//every single component that uses the thing 
import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

//Feedback provider allows us to access the states of different stuff to wrap components in 
export const FeedbackProvider = ({children}) => {
    //loading flag spinner thing
    const[isLoading, setIsLoading] = useState(true)

     //pass this down to components down that need it
    const [feedback, setFeedback] = useState([])

    //used to track and update the item that we want to update upon clicking the edit button 
    const[feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,  
    })

    useEffect(()=>{
        fetchFeedback()
    },[])

    //this function will fetch the feedback data from backend using the fetch api
    const fetchFeedback = async()=>{
        const response = await fetch("/feedback?_sort=id&_order_desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //adds new feedback into json server
    const addFeedback=async(newFeedback)=>{
        const response = await fetch('/feedback',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback), 
        })

        const data = await response.json()

        setFeedback([data, ...feedback]) //setFeedback takes all previous feedback into an array after the new feed back added
    }

    //this method generates a new array minus current feedback that is the same as the id argument passed in
    const deleteFeedback = async(id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/feedback/${id}`, {method: 'DELETE'})

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
    const updateFeedback = async(id, updItem) =>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...data}:item))
    }


    //manages all the objects and functions that need constant updates
    return <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext