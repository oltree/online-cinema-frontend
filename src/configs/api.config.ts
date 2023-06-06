import { PUBLIC_APP_URL } from '@/shared/constants/env';
import { Endpoints } from '@/shared/enums/endpoints.enum';

export const API_URL = `${PUBLIC_APP_URL}/api`;

const getUrl = (endpoint: string, url: string) => `/${endpoint}${url}`;

export const getAuthUrl = (url: string) => getUrl(Endpoints.Auth, url);
export const getUsersUrl = (url: string) => getUrl(Endpoints.Users, url);
export const getMoviesUrl = (url: string) => getUrl(Endpoints.Movies, url);
export const getGenresUrl = (url: string) => getUrl(Endpoints.Genres, url);
export const getActorsUrl = (url: string) => getUrl(Endpoints.Actors, url);
export const getRatingsUrl = (url: string) => getUrl(Endpoints.Ratings, url);
