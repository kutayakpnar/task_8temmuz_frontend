import React, { useState } from 'react';
import { changeUserName } from '../api';

const ChangeNameForm = () => {
  const [id, setId] = useState('');
  const [newName, setNewName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changeUserName(id, newName);
      alert('Name updated successfully');
      setId('');
      setNewName('');
    } catch (error) {
      console.error('Error updating name:', error);
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
        <label>New Name:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Change Name</button>
    </form>
  );
};

export default ChangeNameForm;
