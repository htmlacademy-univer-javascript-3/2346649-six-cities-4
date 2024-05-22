import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../hooks';
import {useNavigate} from 'react-router-dom';
import {loginAction} from '../api/api-action.ts';

export default function Login () {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate('/');
    }
  };
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" id="email" required></input>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" id="password" placeholder="Password" required></input>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Paris</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
