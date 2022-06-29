import React, { useState, useEffect } from "react";
import "./MovieWithGenre.scss";
import { useQuery } from "../../components/hooks";
import { getMovieByGenres } from "../../api/apiCaller";
import apiConfig from "../../api/apiConfig";

function MovieWithGenes() {
  const id = useQuery().get("genreid");
  const title = useQuery().get("title");
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const featchData = async () => {
      const response = await getMovieByGenres(id, page);
      console.log(response.data.results);
      setMovieList(response.data.results);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await getMovieByGenres(id, page);
      setMovieList((movieList) => movieList.concat(response.data.results));
    };
    featchData();
  }, [page]);

  const showMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <React.Fragment>
      <div className="title-genes">{title}</div>
      <div className="movie-with-genes">
        {movieList.map((movie, index) => {
          let urlPoster = apiConfig.imageW500Path + movie.poster_path;
          return (
            <div key={index} className="movie-item">
              <img src={urlPoster} />
              <p>{movie.title || movie.name}</p>
            </div>
          );
        })}
      </div>
      <div className="load-more">
        <span onClick={showMore}>More...</span>
      </div>
    </React.Fragment>
  );
}

export default MovieWithGenes;
