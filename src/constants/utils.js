// http://localhost:4242/ is a local proxy to avoid CORS problems when fetching from https://www.faire.com/
export const baseURL = 'http://localhost:4242/api';

export const defaultCategory = 'All Products';

export const initialState = {
  categories: [],
};
