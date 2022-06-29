import axios from "axios";
import apiConfig from "./apiConfig";

export const getPopular = (page) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/popular?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}`
    )
    .catch((err) => console.error(err));
};

export const getDetailMovie = (id) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/${id}?api_key=${apiConfig.apiKey}&language=${apiConfig.language}`
    )
    .catch((err) => console.error(err));
};

export const getNowPlaying = (page) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/now_playing?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}`
    )
    .catch((err) => console.error(err));
};

export const getTopRatedMovie = (page) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/top_rated?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}`
    )
    .catch((err) => console.log(err));
};

export const getTvPopular = (page) => {
  return axios
    .get(
      `${apiConfig.tvUrl}/popular?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}`
    )
    .catch((err) => console.log(err));
};

export const getTvTopRated = (page) => {
  return axios
    .get(
      `${apiConfig.tvUrl}/top_rated?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}`
    )
    .catch((err) => console.log(err));
};

export const getGenreMovies = () => {
  return axios
    .get(
      `${apiConfig.genresMovieUrl}/list?api_key=${apiConfig.apiKey}&language=${apiConfig.language}`
    )
    .catch((err) => console.log(err));
};

export const getSearchMovies = (query, page) => {
  return axios
    .get(
      `${apiConfig.searchUrl}/multi?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&page=${page}&query=${query}&include_adult=false`
    )
    .catch((err) => console.log(err));
};

export const getVideos = (id) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/${id}/videos?api_key=${apiConfig.apiKey}&language=${apiConfig.language}`
    )
    .catch((err) => console.log(err));
};

export const getSimilarMovie = (id) => {
  return axios
    .get(
      `${apiConfig.baseUrl}/${id}/similar?api_key=${apiConfig.apiKey}&language=${apiConfig.language}`
    )
    .catch((err) => console.log(err));
};

export const getMovieByGenres = (id, page) => {
  return axios
    .get(
      `${apiConfig.discoverUrl}?api_key=${apiConfig.apiKey}&language=${apiConfig.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
    )
    .catch((err) => console.log(err));
};
