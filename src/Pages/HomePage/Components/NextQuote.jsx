const NextQuote = ({ getdata, content }) => (
    <button disabled={content === null} onClick={() => getdata()}
        className='my-2 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-100 transition bg-green-600 rounded-3xl px-8 text-gray-50 py-2'>
        Next Quote
    </button>
)

export default NextQuote