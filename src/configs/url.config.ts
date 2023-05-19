import { Subpaths } from '@/shared/enums/subpaths.enum';

const getUrl = (endpoint: Subpaths, url: string) => `/${endpoint}/${url}`;

export const getMovieUrl = (url: string) => getUrl(Subpaths.Movie, url);
export const getGenreUrl = (url: string) => getUrl(Subpaths.Genre, url);
export const getActorUrl = (url: string) => getUrl(Subpaths.Actor, url);
export const getAdminUrl = (url: string) => getUrl(Subpaths.Admin, url);
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1);
