import axios from 'axios';

const API_URL = 'http://localhost:8080/task';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};