import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './ClientBar.css';

let ctrOpen = false;

const changeOpen = () => {
  const menuBtn = document.querySelectorAll('.menu-btn')[0];
  const navTrigger = document.querySelectorAll('.body-nav-bar')[0];

  if (!ctrOpen) {
    menuBtn.classList.add('open');
    navTrigger.classList.add('open');
    ctrOpen = true;
    return null;
  }
  menuBtn.classList.remove('open');
  navTrigger.classList.remove('open');
  ctrOpen = false;
  return true;
};

const changeUrl = (history, url, clear, isDetails, isAdmDetails) => {
  if (isDetails) {
    history.replace('/');
  }
  if (clear) {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
  }
  ctrOpen = false;
  if (isAdmDetails) {
    return history.push(`/admin/${url}`);
  }
  history.push(url);
  return 'ok';
};

const admOnline = (history, title, isDetails) => (
  <nav className="admin-side-bar-container">
    <div>
      <h3 className="title-adm">{title}</h3>
      <button
        type="button"
        className="nav-btn-adm"
        data-testid="side-menu-item-orders"
        onClick={ () => changeUrl(history, 'orders', null, isDetails, true) }
      >
        Pedidos
      </button>
      <button
        type="button"
        className="nav-btn-adm"
        data-testid="side-menu-item-profile"
        onClick={ () => changeUrl(history, 'profile', null, isDetails, true) }
      >
        Perfil
      </button>
      <button
        type="button"
        className="nav-btn-adm"
        data-testid="side-menu-item-chat"
        onClick={ () => changeUrl(history, 'chats', null, isDetails, true) }
      >
        Conversas
      </button>
    </div>
    <button
      type="button"
      className="nav-btn-adm"
      data-testid="side-menu-item-logout"
      onClick={ () => changeUrl(history, '', true, isDetails, false) }
    >
      Sair
    </button>
  </nav>
);

const TopBar = ({ title, isAdm, isDetails }) => {
  const history = useHistory();
  if (isAdm) return admOnline(history, title, isDetails);
  return (
    <div>
      <div className="body-top-bar">
        <button
          type="button"
          className="menu-btn"
          onClick={ () => changeOpen() }
          data-testid="top-hamburguer"
        >
          <div className="menu-btn-burguer" />
        </button>
        <header className="title" data-testid="top-title">
          {title}
        </header>
        <div className="empty-box" />
      </div>
      <div className="body-nav-bar">
        <nav className="side-menu-container">
          <div>
            <button
              type="button"
              className="nav-btn"
              data-testid="side-menu-item-products"
              onClick={ () => changeUrl(history, 'products', null, isDetails) }
            >
              Produtos
            </button>
            <button
              type="button"
              className="nav-btn"
              data-testid="side-menu-item-my-orders"
              onClick={ () => changeUrl(history, 'orders', null, isDetails) }
            >
              Meus Pedidos
            </button>
            <button
              type="button"
              className="nav-btn"
              data-testid="side-menu-item-my-profile"
              onClick={ () => changeUrl(history, 'profile', null, isDetails) }
            >
              Meu Perfil
            </button>
            <button
              type="button"
              className="nav-btn"
              data-testid="side-menu-chat"
              onClick={ () => changeUrl(history, 'chat') }
            >
              Conversar com a loja
            </button>
          </div>
          <button
            type="button"
            className="nav-btn"
            data-testid="side-menu-item-logout"
            onClick={ () => changeUrl(history, '', true) }
          >
            Sair
          </button>
        </nav>
      </div>
    </div>
  );
};

TopBar.defaultProps = {
  isDetails: undefined,
};

TopBar.propTypes = {
  isAdm: PropTypes.bool.isRequired,
  isDetails: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default TopBar;
