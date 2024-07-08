import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5227/api', // Backend API URL'inizi buraya ekleyin
});

export const getUsers = () => api.get('/Users');
export const registerUser = (userData) => api.post('/Users/register', userData);
export const changeUserName = (id, newName) => api.put(`/Users/changeName/${id}`, { newName });
export const changeUserEmail = (id, newEmail) => api.put(`/Users/changeEmail/${id}`, { newEmail });
export const changeUserPassword = (id, newPassword) => api.put(`/Users/changePassword/${id}`, { newPassword });
export const deleteUser = (id) => api.delete(`/Users/${id}`); // Kullanıcı silme fonksiyonunu ekliyoruz

export default api;
