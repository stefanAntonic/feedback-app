import { createContext, useState, useEffect } from "react";


const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
    })

    useEffect(() => {
      fetchFeedback()

    },[])

    // Fetch Feedback

    const fetchFeedback = async() => {
      const response = await fetch(` /feedback?_sort=id_oder=dsce`)

      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }
    
  //  Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
          await fetch (`feedback/${id}`, {method: 'DELETE'})
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
      const updateFeedback = async (id, updItem) => {
        const response = await fetch ( `/feedback/${id}`, {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data} : item))
        )

      }

    // Add Feedback
      const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(newFeedback )
        })

        const data = await response.json()
       
    
        setFeedback([data, ...feedback]);
      };
      

    return <FeedBackContext.Provider value={{
       feedback,
       feedbackEdit,
       isLoading,
       deleteFeedback,
       addFeedback,
       editFeedback,
       updateFeedback
    }}>
            {children}
        </FeedBackContext.Provider>
};  


export default FeedBackContext;


