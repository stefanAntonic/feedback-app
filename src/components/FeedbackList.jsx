import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence } from 'framer-motion';
import {useContext} from 'react';
import FeedBackContext from '../context/FeedBackContext';


function FeedbackList() {

    const {feedback, } = useContext(FeedBackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No FeedBack Yet</p>
    }
    return (
        <AnimatePresence>
          <div className="feedback-list">
        {feedback.map((item) => (
            <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
            <FeedbackItem
             key={item.id} 
             item= {item}
             />
            </motion.div>
         
             
        ))}
    </div>
        </AnimatePresence>
  
  )
}



export default FeedbackList