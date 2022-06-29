import { useState, useEffect } from "react";
import { getGenreMovies } from "../../api/apiCaller";
import "./GenresMovies.scss";
import { Link } from "react-router-dom";

function GenresMovies() {
  const [genreMovies, setGenreMovies] = useState([]);

  useEffect(() => {
    const getGenre = async () => {
      await getGenreMovies().then((data) => {
        setGenreMovies(data.data.genres);
      });
    };
    getGenre();
  }, []);

  return (
    <ul className="list-genres section mb-2">
      {genreMovies.map((genre) => (
        <Link
          key={genre.id}
          to={`/movieWithGenre?genreid=${genre.id}&title=${genre.name}`}
        >
          <li>{genre.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default GenresMovies;
