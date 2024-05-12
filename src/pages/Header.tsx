import {useAppDispatch, useAppSelector} from '../hooks';
import Spinner from './Loading-Screen.tsx';
import {logoutAction} from '../api/api-cation.ts';
import {updateUserLogin} from '../store/action.ts';
import {AuthorizationStatus} from '../types/offer.tsx';

export default function Header(): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus);
  const isUserDataLoading = useAppSelector((state) => state.isUserDataLoading);
  const userLogin = useAppSelector((state) => state.userLogin);
  const dispatch = useAppDispatch();
  if (isUserDataLoading) {
    return <Spinner />;
  }

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
    dispatch(updateUserLogin(null));
  };

  let loginSection;
  let userSection;
  if (isAuthorized === AuthorizationStatus.Auth) {
    loginSection = (
      <li className="header__nav-item">
        <a href="/login" onClick={handleLogout} >Sign out</a>
      </li>
    );
    userSection = (
      <a className="headernav-link headernav-link--profile" href="#">
        <div className="headeravatar-wrapper useravatar-wrapper">
        </div>
        <span className="headeruser-name username">{userLogin}</span>
        <span className="header__favorite-count">69</span>
      </a>
    );
  } else {
    loginSection = (
      <li className="header__nav-item">
        <a href="/login" >Sign in</a>
      </li>
    );
    userSection = (
      <a className="headernav-link headernav-link--profile" href="#"></a>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="headerlogo-link headerlogo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {userSection}
              </li>
              {loginSection}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
