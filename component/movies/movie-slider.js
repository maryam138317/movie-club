'use client';

import { useState } from 'react';
import MovieGrid from './movie-grid';
import Link from 'next/link';

export default function MovieSlider({ movies }) {

    const [activeMovie, setActiveMovie] = useState(movies[0]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden transition-all duration-700">
        <div 
        className="absolute inset-0 -z-10 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${activeMovie.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) brightness(0.6)'
        }}
      />

      <div className="pt-32 pl-12 max-w-2xl text-white animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">{activeMovie.title}</h1>
        <div className="flex gap-4 mb-4 text-red-400 font-semibold">
          <span>{activeMovie.genre}</span>
          <span>⭐ {activeMovie.rating}</span>
        </div>
        <p className="text-lg leading-relaxed text-gray-200 max-md:hidden">
          {activeMovie.summary}
        </p>
        <button className='mt-2 border border-white rounded-2xl px-2.5 py-1'>
            <Link href={`/${activeMovie.slug}`}>
            View Details...
            </Link>
        </button>
      </div>

      <MovieGrid 
        movies={movies} 
        onSelectMovie={setActiveMovie} 
        activeId={activeMovie.id} 
      />
    </div>
  );
}