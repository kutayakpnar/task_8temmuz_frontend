import React, { useEffect, useState } from 'react';
import { getUsers } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <img src={`http://localhost:5227${user.profilePictureUrl}`} alt="Profile" width="50" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
