import { baseUrl } from './constants';

async function createResponse(url: string, method: string) {
  try {
    const config = {
      method,
      headers: {},
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const getPosts = async () => {
  const url = `${baseUrl}/posts`;
  return createResponse(url, 'GET');
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
