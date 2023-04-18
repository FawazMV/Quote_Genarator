import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuoteBookmark } from '../../../utils/Redux/Bookmark'
import Shimmer from './Shimmer'
const QuoteDiv = ({ content, author, id }) => {
    const[savedId,setSavedId]= useState('')
    const dispatch = useDispatch()


    const addToBookmark = () => {
        dispatch(addQuoteBookmark({
            author, content, id
        }))
        setSavedId(id)
    }
    return (
        <div className='w-screen flex justify-center py-5 px-5 sm:px-10'>
            {content ?
                <div className='min-h-[200px] text-gray-50 py-3 px-5 md:px-14 bg-[#d05252] w-full md:w-[600px] rounded-xl flex justify-center flex-col'>
                    <p className='break-words my-3 flex-grow text-xl font-sans tracking-wide'>{content}</p>
                    <p className='my-1 text-sm font-bold text-center font-serif capitalize'>- {author}
                        <span className='float-right mr-4'>
                            {savedId === id ?
                                <svg fill="currentColor" className='w-5 h-5 text-green-600' viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                </svg> :
                                <button onClick={addToBookmark} > <svg fill="currentColor" className='w-5 h-5 cursor-pointer' viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
                                </svg> </button>

                            }
                        </span>
                        <span></span>
                    </p>
                </div>
                : <Shimmer />
            }
        </div>
    )
}

export default QuoteDiv
