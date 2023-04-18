import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomQuote } from '../../api/requests'
import { setQuote } from '../../utils/Redux/RandomQuote'
import QuoteDiv from './Components/QuoteDiv'

const HomePage = () => {
  const { quote, author } = useSelector(state => state.quote)
  const dispatch = useDispatch()
  useEffect(() => {
    !quote && getdata()
  }, [])

  const getdata = async () => {
    const response = await getRandomQuote()
    if (response?.status === 200) {
      dispatch(setQuote({
        quote: response?.data?.content,
        author: response?.data?.author
      }))
    }
  }
  return (
    <div>
      <QuoteDiv quote={quote} author={author} />
    </div>
  )
}

export default HomePage

