import { useState, useEffect, useCallback } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)
  const errorMessage = 'Failed to fetch a joke. Please try again.'

  const fetchJoke = useCallback(async () => {
    setLoading(true)

    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )

      if (response.ok === false) {
        throw new Error('Request failed')
      }

      const data = await response.json()

      if (!data?.joke) {
        throw new Error('Invalid API response')
      }

      setJoke(data.joke)
    } catch {
      setJoke(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [errorMessage])

  useEffect(() => {
    fetchJoke()
  }, [fetchJoke])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
