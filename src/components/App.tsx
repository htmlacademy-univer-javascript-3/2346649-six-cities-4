import Main from '../pages/Main.tsx';
import {Place} from './component.tsx';

const cards: Place[] = [
  {
    name: 'Paris',
    type: 'Apartment',
    img: 'img/apartment-01.jpg',
    rating: 4,
    valuePerNight: 120,
    isPremium: true,
    isBookmarked: false,
  },
  {
    name: 'Wood and stone place',
    type: 'Room',
    img: 'img/room.jpg',
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
  },
  {
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    img: 'img/apartment-02.jpg',
    rating: 4,
    valuePerNight: 132,
    isPremium: false,
    isBookmarked: false,
  },
  {
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    img: 'img/apartment-03.jpg',
    rating: 5,
    valuePerNight: 180,
    isPremium: true,
    isBookmarked: false,
  },
  {
    name: 'Wood and stone place',
    type: 'Room',
    img: 'img/room.jpg',
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
  },
];

export default function App (){
  return (
    <Main placeCards={cards}/>
  );
}
