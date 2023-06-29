import React from 'react';
import './styles/Navigation.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { logOut } from '../auth/authSlice';

function Navigation(): JSX.Element {
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const onHandleLogOut: React.MouseEventHandler<HTMLAnchorElement> = async (e): Promise<void> => {
    e.preventDefault();
    dispatch(logOut());
  };
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
          {!user ? (
            <>
              <li>
                <NavLink className="nav__button" to="/registration">
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__button" to="/authorization">
                  Authorization
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>Hello {user?.name}</li>
              <li>
                <a onClick={onHandleLogOut} className="nav__button" href="/">
                  LogOut
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
