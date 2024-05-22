import {Point} from '../types/offer.tsx';
import CardsList from '../cards/offerList.tsx';
import {constCities, filters} from '../consts/cities.tsx';
import {useState} from 'react';
import Map from '../components/cities-map.tsx';
import {store} from '../store';
import Filters from '../components/filter.tsx';
import CitiesList from '../cities-list/cities-list.tsx';
import Header from './Header.tsx';

export default function Main () {
  const [currentState, setCurrentState] = useState(store.getState().offers);
  const points = currentState.cityOffers?.map((item) => ({
    lat: item.location.latitude,
    lng: item.location.longitude,
    ...item
  }));
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(points[0]);
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.id === listItemName);
    setSelectedPoint(currentPoint);
  };
  const [sortType, setSortType] = useState(filters.POPULAR);
  const handleSort = (newSortType: string) => {
    setSortType(newSortType);
  };
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentState.city} cities={constCities} setCurrentCity={setCurrentState}/>
          </section>
        </div>
        <div className="cities">
          {currentState.cityOffers.length === 0 ? (
            <div className="cities">
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in
                        Dusseldorf
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            </div>
          ) : (
            < div className = 'cities__places-container container' >
              < section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className="places__found">{currentState.cityOffers.length.toString()} places to stay
          in {currentState.city}
                </b>
                <Filters handleSort={handleSort}/>
                <CardsList citiesCards={currentState.cityOffers.map((item) => ({
                  ...item,
                  image: item.previewImage,
                  roomName: item.title,
                  roomType: item.type,
                  onListItemHover: handleListItemHover,
                }))}
                sortType={sortType}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={currentState.cityOffers[0].city} points={points} selectedPoint={selectedPoint} height='800px' width='515px' />
                </section>
              </div>
            </div>)}
        </div>
      </main>
    </div>
  );
}
