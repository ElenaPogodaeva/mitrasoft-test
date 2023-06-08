import { SearchPostsParams } from '../types/types';
import { baseUrl } from './constants';

async function createResponse(url: string, method: string, params?: SearchPostsParams) {
  try {
    const config = {
      method,
      headers: {},
    };
    const newUrl = new URL(url);

    if (params) {
      newUrl.search = new URLSearchParams(params).toString();
    }

    const response = await fetch(newUrl.href, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const getPosts = (params: SearchPostsParams) => {
  const url = `${baseUrl}/posts`;
  return createResponse(url, 'GET', params);
};

export const getComments = () => {
  const url = `${baseUrl}/comments`;
  return createResponse(url, 'GET');
};

export const getUser = (id: number) => {
  const url = `${baseUrl}/users/${id}`;
  return createResponse(url, 'GET');
};

export const getUserPosts = (id: number) => {
  const url = `${baseUrl}/users/${id}/posts`;
  return createResponse(url, 'GET');
};
