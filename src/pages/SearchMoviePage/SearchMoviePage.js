import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Context from "../../store/context";
import * as actions from "../../store/actions";
import "./SearchMoviePage.scss";
import { getSearchMovies } from "../../api/apiCaller";
import playbutton from "../../images/playbutton.png";
import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMoviePage() {
  const [state, dispatch] = useContext(Context);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const keywords = useQuery().get("keywords");
  const navigate = useNavigate();

  const handleOpenDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };

  const showMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const getMovies = async () => {
      await getSearchMovies(keywords, page).then((res) => {
        console.log(res.data.results);
        setSearchMovieList(res.data.results);
      });
    };
    if (keywords.length === 0) {
      setSearchMovieList([]);
    }
    if (keywords) {
      getMovies();
    }
  }, [keywords]);

  useEffect(() => {
    const pushListMovies = async () => {
      await getSearchMovies(keywords, page).then((res) => {
        setSearchMovieList((searchMovieList) =>
          searchMovieList.concat(res.data.results)
        );
      });
    };
    pushListMovies();
  }, [page]);

  return (
    <React.Fragment>
      <div className="list-search-movie">
        {searchMovieList.map((movie, index) => {
          let urlPoster = apiConfig.imageW500Path + movie.poster_path;
          return (
            <div
              key={index}
              className="movie-item"
              onClick={(e) => handleOpenDetail(movie.id)}
            >
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

export default SearchMoviePage;
