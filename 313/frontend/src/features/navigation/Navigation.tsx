import React from 'react';
import './styles/Navigation.scss';
import { NavLink, Outlet } from 'react-router-dom';

function Navigation(): JSX.Element {
  return (
    <>
      <div className="nav__container container">
        <ul className="nav__menu">
          <li className="nav__item">
            <NavLink className="nav__button" to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__button" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__button" to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__button" to="">
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__button" to="">
              Authorization
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__button" to="">
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
