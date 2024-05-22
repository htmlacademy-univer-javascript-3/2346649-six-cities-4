import {useAppDispatch} from '../hooks';
import {store} from '../store';
import {updateCity} from '../store/action.ts';
import {InitialStateOffer} from '../types/offer.tsx';

type CityProps = {
  city: string;
  currentCity: string;
  setCurrentCity: (offer: InitialStateOffer) => void;
}

type CityListProps = {
  cities: string[];
  currentCity: string;
  setCurrentCity: (offer: InitialStateOffer) => void;
}

function City ({ city, currentCity, setCurrentCity }: CityProps): JSX.Element {
  const handleCurrentState = () => {
    setCurrentCity(store.getState().offers);
  };
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className={currentCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
        onClick={() => {
          dispatch(updateCity(city));
          handleCurrentState();
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default function CitiesList({cities, currentCity, setCurrentCity}: CityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => (
        <City key={item} city={item} currentCity={currentCity} setCurrentCity={setCurrentCity}/>
      ))}
    </ul>
  );
}
