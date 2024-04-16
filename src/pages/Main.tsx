import {Link} from 'react-router-dom';
import {City} from '../types/offer.tsx';
import CardsList from '../components/offerList.tsx';
import {amsterdam} from '../mocks/cities.tsx';
import {useState} from 'react';
import Map from '../components/cities-map.tsx';
import {store} from '../store';
import {useAppDispatch} from '../hooks';
import {updateOffers} from '../store/action.ts';

// type MainProps = {
//   placeCards: number;
//   offers: OfferType[];
// }

export default function Main () {
  const [currentState, setCurrentState] = useState(store.getState());
  const handleCurrentState = () => {
    setCurrentState(store.getState());
  };
  const dispatch = useAppDispatch();
  const points: City[] = [];
  currentState.offers.map((e) => e.city).forEach((point) => {
    points.push(point);
  });
  const [selectedPoint, setSelectedPoint] = useState<City | undefined>(points[0]);
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.name === listItemName);
    setSelectedPoint(currentPoint);
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
            {/*<CitiesList />*/}
            <ul className="locationslist tabslist">
              <li className="locations__item">
                <a
                  className={currentState.city === 'Paris' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  href="#" onClick={() => {
                    dispatch(updateOffers('Paris'));
                    handleCurrentState();
                  }}
                >
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={currentState.city === 'Cologne' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  href="#" onClick={() => {
                    dispatch(updateOffers('Cologne'));
                    handleCurrentState();
                  }}
                >
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={currentState.city === 'Brussels' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  href="#" onClick={() => {
                    dispatch(updateOffers('Brussels'));
                    handleCurrentState();
                  }}
                >
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={currentState.city === 'Amsterdam' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  onClick={() => {
                    dispatch(updateOffers('Amsterdam'));
                    handleCurrentState();
                  }}
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={currentState.city === 'Hamburg' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  href="#" onClick={() => {
                    dispatch(updateOffers('Hamburg'));
                    handleCurrentState();
                  }}
                >
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={currentState.city === 'Dusseldorf' ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
                  href="#" onClick={() => {
                    dispatch(updateOffers('Dusseldorf'));
                    handleCurrentState();
                  }}
                >
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentState.offers.length.toString()} places to stay in {currentState.city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardsList citiesCards={currentState.offers.map((item) => ({
                id: item.id,
                valuePerNight: item.valuePerNight,
                isBookmarked: item.isBookmarked,
                img: item.img,
                isPremium: item.isPremium,
                rating: item.rating,
                type: item.type,
                name: item.name,
                onListItemHover: handleListItemHover
              }))}
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
