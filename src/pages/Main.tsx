import {Link} from 'react-router-dom';
import {City} from '../types/offer.tsx';
import CardsList from '../components/offerList.tsx';
import {amsterdam, constCities, filters} from '../mocks/cities.tsx';
import {useState} from 'react';
import Map from '../components/cities-map.tsx';
import {store} from '../store';
import Filters from '../components/filter.tsx';
import CitiesList from '../cities-list/cities-list.tsx';

// type MainProps = {
//   placeCards: number;
//   offers: OfferType[];
// }

export default function Main () {
  const [currentState] = useState(store.getState());
  const points = currentState.offers.map((item) => ({
    id: item.id,
    ...item.city
  }));
  const [selectedPoint, setSelectedPoint] = useState<City | undefined>(points[0]);
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.name === listItemName);
    setSelectedPoint(currentPoint);
  };
  const [sortType, setSortType] = useState(filters.POPULAR);
  const handleSort = (newSortType: string) => {
    setSortType(newSortType);
  };
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  MikleAKA@gmail.com
                    </span>
                    <Link to='/favorites'>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locationslist tabslist">
              <CitiesList currentCity={currentState.city} cities={constCities}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentState.cityOffers.length.toString()} places to stay in {currentState.city}</b>
              {/*Я помню вы говорили, что выше не нужно использовать currentState.city, но не помню почему, потому*/}
              {/*что по логике мы же должны выводить предложения для нынешнего города*/}
              <Filters handleSort={handleSort}/>
              <CardsList citiesCards={currentState.cityOffers.map((item) => ({
                ...item,
                onListItemHover: handleListItemHover,
              }))}
              sortType={sortType}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={amsterdam} points={currentState.offers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
