import {useAppDispatch} from '../hooks';
import {useState} from 'react';
import {store} from '../store';
import {updateCity} from '../store/action.ts';

type CityProps = {
  city: string;
  currentCity: string;
}

type CityListProps = {
  cities: string[];
  currentCity: string;
}

function City ({ city, currentCity }: CityProps): JSX.Element {
  const [, setCurrentState] = useState(store.getState().offers);
  const handleCurrentState = () => {
    setCurrentState(store.getState().offers);
  };
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className={currentCity === city ? 'locationsitem-link tabsitem tabs__item--active' : 'locationsitem-link tabsitem'}
        href="#" onClick={() => {
          dispatch(updateCity(city));
          handleCurrentState();
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default function CitiesList({cities, currentCity}: CityListProps): JSX.Element {
  return (
    <ul>
      {cities.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <City key={index} city={item} currentCity={currentCity}/>
      ))}
    </ul>
  );
}
