import axios from 'axios';

axios.defaults.withCredentials = true;

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8080' : '';

export const login = async (username) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { username });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error.response?.data || { error: "Login failed" };
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/logout`);
    return response.data;
  } catch (error) {
    console.error('Logout error:', error.response?.data || error.message);
    throw error.response?.data || { error: "Logout failed" };
  }
};

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/check`);
    return response.data;
  } catch (error) {
    console.error('Auth check error:', error.response?.data || error.message);
    return { authenticated: false };
  }
};

export default {
  login,
  logout,
  checkAuth
};