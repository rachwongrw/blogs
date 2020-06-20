import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

// extracting hook logic 

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    console.log('hi there')
    try {
      const response = await yelp.get('/search', {
        params: { //  adds key value pairs onto query string
          term: searchTerm,
          limit: 50,
          location: 'vancouver'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage];
}