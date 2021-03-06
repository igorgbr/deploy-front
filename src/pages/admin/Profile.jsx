import React from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/ClientBar';
import './CSS/Profile.css';

const Profile = () => {
  const history = useHistory();
  const loginInStorage = JSON.parse(localStorage.getItem('user'));

  if (!loginInStorage) {
    history.push('');
    return <div />;
  }
  const { name, email } = loginInStorage;

  return (
    <div className="bodyAdm">
      <SideBar title="TryBeer" isAdm />
      <div className="profile-container">
        <h2 className="new-text">Perfil</h2>
        <div className="infoText">
          <span data-testid="profile-name">{`Nome: ${name}`}</span>
          <span data-testid="profile-email">{`Email: ${email}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
