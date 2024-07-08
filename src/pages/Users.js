import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api'; 
import { Link } from 'react-router-dom';
import '../styles/Users.css'; 
import trashIcon from '../assets/trash_icon.png'; 

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-list">
      <h2>FileOrbis Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.profilePictureUrl && (
              <img className="user-profile" src={`http://localhost:5227${user.profilePictureUrl}`} alt="Profile" />
            )}
            <div className="user-details">
              <p><strong>UserId:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password}</p>
            </div>
            <button className="delete-icon" onClick={() => handleDelete(user.id)}>
              <img src={trashIcon} alt="Delete" />
            </button>
          </li>
        ))}
      </ul>
      <div className="link">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
