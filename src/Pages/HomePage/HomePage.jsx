import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomQuote, getRandomQuoteWithTags } from '../../api/requests'
import { removeQuote, setQuote } from '../../utils/Redux/RandomQuote'
import NextQuote from './Components/NextQuote'
import QuoteDiv from './Components/QuoteDiv'
import TagSelect from './Components/TagSelect'

const HomePage = () => {
  const { id, content, author } = useSelector(state => state.quote)
  const { slugs } = useSelector(state => state.tags)
  const dispatch = useDispatch()

  useEffect(() => {
    !content && getdata()
  }, [])

  const getdata = async () => {
    dispatch(removeQuote())
    let response;
    if (!slugs) {
       response = await getRandomQuote()
    }else{
      response = await getRandomQuoteWithTags(slugs)
    }
    if (response?.status === 200) {
      dispatch(setQuote({
        id: response?.data?._id,
        content: response?.data?.content,
        author: response?.data?.author
      }))
    }
  }
  return (
    <div className='grid place-items-center'>
      <QuoteDiv id={id} content={content} author={author} />
      <TagSelect />
      <NextQuote content={content} getdata={getdata} />
    </div>
  )
}

export default HomePage



