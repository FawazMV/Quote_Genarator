import Shimmer from './Shimmer'
const QuoteDiv = ({ quote, author }) => (
    <div className='w-screen flex justify-center px-5 sm:px-10'>
        {quote ?
            <div className='min-h-[200px] text-gray-50 py-3 px-5 md:px-14 bg-[#d05252] w-full md:w-[600px] rounded-xl flex justify-center flex-col'>
                <p className='break-words my-3 flex-grow text-xl font-sans tracking-wide'>{quote}</p>
                <p className='my-1 text-sm font-bold text-center font-serif capitalize'>- {author}</p>
            </div>
            : <Shimmer />
        }
    </div>
)

export default QuoteDiv
