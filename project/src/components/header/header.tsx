import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../types/enums';
import UserArea from '../user-area/user-area';

const Header = () => {
  const isLoginPage = useMatch(AppRoute.Login);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.Main}
              className="header__logo-link"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>

          {!isLoginPage && <UserArea />}
        </div>
      </div>
    </header>
  );
};

export default Header;
