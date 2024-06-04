import { useState, createContext, useContext } from "react"

const RatingContext = createContext();

export const RatingProvider = ({children}) => {
// Te gjitha ose me sakt states deh funksione te cilat i kaloni me ane te prop drilling
// eshte e mira ti vendosni brenda Providerit.
const [ratings, setRatings] = useState({});

const handleRatingChange = (bookId, rating) => {
    setRatings((prevRating ) => ({
      ...prevRating,
      [bookId]: rating
    }))
   }

   return (
    <RatingContext.Provider value={{ratings, handleRatingChange}}>{children}</RatingContext.Provider>
   )
}

export const useRating = () => {
    return useContext(RatingContext)
}