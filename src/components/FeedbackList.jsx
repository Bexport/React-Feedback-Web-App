import React from 'react'
import FeedBackItem from './FeedBackItem'
import {motion, AnimatePresence} from 'framer-motion'//this just fades the feedback item in and out
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext) 

    if(!feedback || feedback.length===0){
        return <p>No feedback yet</p>
    }
    

    return (
        <div classname='feedback-list'>
            <AnimatePresence>
                {feedback.map((item)=>(
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <FeedBackItem key={item.id} item={item} />
                    </motion.div>
                ))}   
            </AnimatePresence>         
        </div>
    )
}


export default FeedbackList