import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [{
            id: 1,
            text: ' This is Feedback item number 1',
            rating: 10
        },
        {
            id: 2,
            text: ' This is Feedback item number 2',
            rating: 4
        },
        {
            id: 3,
            text: ' This is Feedback item number 3',
            rating: 8
        },]
    );

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
    })
  //  Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

    // Edit Feedback

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true,
      }
      )
    };

    // Update Feedback item 
      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )

      }

    // Add Feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
    
        setFeedback([newFeedback, ...feedback]);
      };
      

    return <FeedBackContext.Provider value={{
       feedback,
       feedbackEdit,
       deleteFeedback,
       addFeedback,
       editFeedback,
       updateFeedback
    }}>
            {children}
        </FeedBackContext.Provider>
};  


export default FeedBackContext;


