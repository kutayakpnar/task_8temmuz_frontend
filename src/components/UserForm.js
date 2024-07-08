import React, { useState } from 'react';
import { registerUser } from '../api';
import '../styles/UserForm.css'; 

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profilePicture', profilePicture);

    try {
      await registerUser(formData);
      alert('User registered successfully');
      // Form işlemi başarılı olduktan sonra form alanlarını temizleyin
      setName('');
      setEmail('');
      setPassword('');
      setProfilePicture(null);
      e.target.reset(); // Dosya inputunu da temizlemek için formu sıfırlayın
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Profile Picture:</label>
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
