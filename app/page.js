// app/page.js
import MovieSlider from "@/component/movies/movie-slider";
import { getMovies } from "@/lib/movies";
import Link from "next/link";
import { Suspense } from "react";

async function MovieLoader() {
  const movies = await getMovies();
  return <MovieSlider movies={movies} />;
}

export default function HomePage() {
  return (
    <>
      <header className="z-50 relative">
        <Link href='/share'>
           <div className="group flex items-center absolute right-4 top-4 animate-bounce hover:animate-none">
    <div className="text-white bg-red-500/50 py-1 px-1.5 rounded-l-lg hidden group-hover:flex transition-alls">share your favorite movies</div>
    <div className="w-12 h-12 rounded-full bg-red-500/50 flex justify-center items-center mr-1">
      <div className="w-10 h-10 rounded-full bg-red-500 text-white flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
        </svg>
      </div>
    </div>
  </div>
        </Link>
      </header>
      <main>
        <Suspense fallback={<p className="text-white">Loading Movies...</p>}>
          <MovieLoader />
        </Suspense>
      </main>
    </>
  );
}