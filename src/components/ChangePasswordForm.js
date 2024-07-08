import React, { useState } from 'react';
import { changeUserPassword } from '../api';

const ChangePasswordForm = () => {
  const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changeUserPassword(id, newPassword);
      alert('Password updated successfully');
      setId('');
      setNewPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
