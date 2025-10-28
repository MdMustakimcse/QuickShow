import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../Components/MovieCard'

const favorite = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 py-10 text-white'>
      <h1 className='text-2xl font-bold mb-6'>Your Favorite Movies</h1>

      {dummyShowsData.length > 0 ? (
        <div className='flex flex-wrap gap-8 justify-center'>
          {dummyShowsData.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className='text-gray-400 text-center mt-10'>
          No movies available right now.
        </p>
      )}
    </div>
  )
}

export default favorite
