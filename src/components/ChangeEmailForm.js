import React, { useState } from 'react';
import { changeUserEmail } from '../api';

const ChangeEmailForm = () => {
  const [id, setId] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changeUserEmail(id, newEmail);
      alert('Email updated successfully');
      setId('');
      setNewEmail('');
    } catch (error) {
      console.error('Error updating email:', error);
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
        <label>New Email:</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Change Email</button>
    </form>
  );
};

export default ChangeEmailForm;
