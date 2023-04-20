import axios from 'axios';

const KEY = 'fe2081c2f49497d6a2d78b7f4a32d1d7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingFilms() {
  const data = await axios('trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
  return data.data.results;
}
export async function fetchFilmById(id) {
  const data = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}
export async function fetchFilmReviews(id) {
  const data = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchFilmCredits(id) {
  const data = await axios(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchSearchFilm(query) {
  const data = await axios(`search/movie`, {
    params: {
      api_key: KEY,
      query: query,
      language: 'en-US',
      page: 1,
    },
  });

  return data.data.results;
}
