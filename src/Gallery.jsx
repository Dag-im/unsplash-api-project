import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useGlobalContext } from './context'

const url =
  'https://api.unsplash.com/search/photos/?client_id=mbqi2FTaxD7oOWLziP8BMAPcOnF4ZhWmfLIDm8NVSN4&query='
const Gallery = () => {
  const { searchValue } = useGlobalContext()
  const response = useQuery({
    queryKey: ['photos', searchValue],
    queryFn: async () => {
      const res = await axios.get(`${url}${searchValue}`)
      return res.data
    },
  })
  if (response.isError) {
    return <h1>There was an Error...</h1>
  }
  if (response.isLoading) {
    return <h1>Loading...</h1>
  }
  const results = response.data.results
  if (results.length < 1) {
    return <h1>No results found...</h1>
  }
  return (
    <div className='img-container'>
      {results.map((result) => {
        const url = result?.urls?.regular
        return (
          <img
            key={result.id}
            src={url}
            alt={result.alt_description}
            className='image'
          />
        )
      })}
    </div>
  )
}

export default Gallery
