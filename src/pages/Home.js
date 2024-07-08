import React from 'react';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div>
      <h1>FileOrbis User Registration</h1>
      <UserForm />
      <div className="link">
        <Link to="/users">
          <button>See All Users</button>
        </Link>
        <Link to="/update-user">
          <button>Update User Information</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
