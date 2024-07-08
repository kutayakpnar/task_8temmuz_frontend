import React from 'react';
import ChangeNameForm from '../components/ChangeNameForm';
import ChangeEmailForm from '../components/ChangeEmailForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import { Link } from 'react-router-dom';
import '../styles/UpdateUser.css'; 

const UpdateUser = () => {
  return (
    <div>
      <h1>Update User Information</h1>
      <ChangeNameForm />
      <ChangeEmailForm />
      <ChangePasswordForm />
      <div className="link">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateUser;
