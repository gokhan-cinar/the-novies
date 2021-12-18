import axios from 'axios';

/**
 * API urls
 */
const apiUrl = 'https://api.themoviedb.org/3';
export const apiImgUrl = 'https://image.tmdb.org/t/p/';

/**
 * Get movie (single)
 */
export function getMovie (id) {
  return new Promise((resolve, reject) => {
    axios.get(`${apiUrl}/movie/${id}`, {
      params: {
        api_key: process.env.API_KEY,
        language: process.env.API_LANG,
        append_to_response: 'videos,credits,images,external_ids,release_dates',
        include_image_language: 'en',
      },
    }).then((response) => {
      resolve(response.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Get trending
 */
export function getTrending (media, page = 1) {
  return new Promise((resolve, reject) => {
    axios.get(`${apiUrl}/trending/${media}/week`, {
      params: {
        api_key: process.env.API_KEY,
        language: process.env.API_LANG,
        page,
      },
    }).then((response) => {
      resolve(response.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Popular
 */
export function getPopular (media, page = 1) {
  return new Promise((resolve, reject) => {
    axios.get(`${apiUrl}/movie/popular`, {
      params: {
        api_key: process.env.API_KEY,
        language: process.env.API_LANG,
        page,
      },
    }).then((response) => {
      resolve(response.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
};

