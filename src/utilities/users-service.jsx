import axios from 'axios';
import sendRequest from './send-request';

const BASE_URL = 'http://localhost:3000/users';

export const signUp = async (userData) => {
  const response = await axios.post(BASE_URL, userData);
  return response.data;
};

export const logIn = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', { user: credentials });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data.user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}
