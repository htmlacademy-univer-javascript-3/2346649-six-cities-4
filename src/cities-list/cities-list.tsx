// import {useAppDispatch} from '../hooks';
// import {updateOffers} from '../store/action.ts';
// import {useState} from 'react';
// import {store} from '../store';
//
// type CityProps = {
//   city: string;
// }
//
// type CityListProps = {
//   cities: CityProps[];
// }
//
// function City ({ city }: CityProps): JSX.Element {
//   const [currentState, setCurrentState] = useState(store.getState());
//   const handleCurrentState = () => {
//     setCurrentState(store.getState());
//   };
//   const dispatch = useAppDispatch();
//   return (
//     <li className="locations__item">
//       <a className={currentState.city === city ? 'locations__item-link tabs__item--active' : 'locations__item-link tabs__item'} href="#" onClick={() => {
//         dispatch(updateOffers(currentState.city));
//         handleCurrentState();
//       }}
//       >
//         <span>{currentState.city}</span>
//       </a>
//     </li>
//   );
// }
//
// function CitiesList({ cities }: CityListProps): JSX.Element {
//   return (
//     <ul>
//       {cities.map((item, index) => (
//         <City key={index} city={item.city} />
//       ))}
//     </ul>
//   );
// }
