import React from 'react'
import { useSelector } from 'react-redux'
import BookmarkCards from './Components/BookmarkCards'

const BookMarks = () => {
  const { quotes } = useSelector((state) => state.bookmark)
  console.log(quotes)
  return (
    <>
      <div className='grid place-items-center  py-5 px-5 sm:px-10'>
        {quotes.length ?
          quotes.map((quotes, index) => (
            <div key={index} className="mt-6 w-full md:w-[600px]">
              <BookmarkCards {...quotes} />
            </div>
          ))
          :
          <div className='text-3xl font-bold text-gray-50'>No Quotes Added</div>
        }
      </div>
    </>
  )
}

export default BookMarks