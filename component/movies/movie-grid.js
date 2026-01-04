import MovieItem from "./movie-item";

export default function MovieGrid({ movies, onSelectMovie, activeId }) {
  return (
    <ul className="bg-gray-400/20 backdrop-blur-md rounded-xl border border-white/20 flex gap-3 p-2 w-[70%] absolute bottom-7 left-1/2 -translate-x-1/2 overflow-x-auto">
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelectMovie(movie)} className="cursor-pointer">
          <MovieItem 
            image={movie.image} 
            title={movie.title}
            isActive={movie.id === activeId}
          />
        </li>
      ))}
    </ul>
  );
}