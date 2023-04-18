import React from 'react'
import { useDispatch } from 'react-redux'
import { removeQuoteBookmark } from '../../../utils/Redux/Bookmark'

const BookmarkCards = ({ content, author,id }) => {
    const dispatch = useDispatch()
    const removeBookMark = (id) => {
        dispatch(removeQuoteBookmark({id}))
    }
    return (
        <div className='min-h-[150px] text-gray-50 py-3 px-5 md:px-14 bg-[#d05252]  rounded-xl flex justify-center flex-col'>
            <p className='break-words my-3 flex-grow text-xl font-sans tracking-wide'>{content}</p>
            <p className='my-1 text-sm font-bold text-center font-serif capitalize'>- {author}
                <span className='float-right mr-4'>
                    <button onClick={() => removeBookMark(id)}>
                        <svg fill="currentColor" className='w-5 h-5 cursor-pointer' viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                        </svg>
                    </button>
                </span>
                <span></span>
            </p>
        </div>
    )
}

export default BookmarkCards