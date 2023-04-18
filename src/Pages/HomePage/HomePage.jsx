import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomQuote } from '../../api/requests'
import { removeQuote, setQuote } from '../../utils/Redux/RandomQuote'
import NextQuote from './Components/NextQuote'
import QuoteDiv from './Components/QuoteDiv'

const HomePage = () => {
  const { quote, author } = useSelector(state => state.quote)
  const dispatch = useDispatch()
  
  useEffect(() => {
    !quote && getdata()
  }, [])

  const getdata = async () => {
    dispatch(removeQuote())
    const response = await getRandomQuote()
    if (response?.status === 200) {
      dispatch(setQuote({
        quote: response?.data?.content,
        author: response?.data?.author
      }))
    }
  }
  return (
    <div className='grid place-items-center'>
      <QuoteDiv quote={quote} author={author} />
      <NextQuote quote={quote} getdata={getdata} />
    </div>
  )
}

export default HomePage

