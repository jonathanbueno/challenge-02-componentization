import { useEffect, useState } from 'react';

import { MovieCard } from '../components/MovieCard';
import { GenreResponseProps, MovieProps } from '../@types/custom';

import { api } from '../services/api';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
}

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [props.selectedGenreId]);

  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map((movie: MovieProps) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
