export const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=KR`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=KR`;
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=KR`;
export const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=KR`;

export const getMovieDetailUrl = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`;
export const getSimilarMoviesUrl = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`;
export const getMovieVideosUrl = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`;
export const getSearchUrl = (query: string) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=ko-KR`;
export const getImageUrl = (width: number, path: string) =>
  `https://image.tmdb.org/t/p/w${width + path}`;

export const homeUrls = [
  { title: "영화관 상영작", url: NOW_PLAYING_MOVIES_URL },
  { title: "인기 영화", url: POPULAR_MOVIES_URL },
  { title: "TOP RANKED", url: TOP_RATED_MOVIES_URL },
  { title: "개봉 예정작", url: UPCOMING_MOVIES_URL },
];

export const getDetailUrls = (id: string) => [
  getMovieDetailUrl(id),
  getSimilarMoviesUrl(id),
  getMovieVideosUrl(id),
];
