import Main from '../pages/Main.tsx';
// import {Place} from './component.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../error/NotFound.tsx';
import Offer from '../pages/Offer.tsx';
import Login from '../pages/Login.tsx';
import Favourites from '../pages/Favourites.tsx';
import PrivateRoute from '../private/private-route.tsx';
import {OfferType} from '../types/offer';

// const cards: Place[] = [
//   {
//     name: 'Paris',
//     type: 'Apartment',
//     img: 'img/apartment-01.jpg',
//     rating: 4,
//     valuePerNight: 120,
//     isPremium: true,
//     isBookmarked: false,
//   },
//   {
//     name: 'Wood and stone place',
//     type: 'Room',
//     img: 'img/room.jpg',
//     rating: 4,
//     valuePerNight: 80,
//     isPremium: false,
//     isBookmarked: true,
//   },
//   {
//     name: 'Canal View Prinsengracht',
//     type: 'Apartment',
//     img: 'img/apartment-02.jpg',
//     rating: 4,
//     valuePerNight: 132,
//     isPremium: false,
//     isBookmarked: false,
//   },
//   {
//     name: 'Nice, cozy, warm big bed apartment',
//     type: 'Apartment',
//     img: 'img/apartment-03.jpg',
//     rating: 5,
//     valuePerNight: 180,
//     isPremium: true,
//     isBookmarked: false,
//   },
//   {
//     name: 'Wood and stone place',
//     type: 'Room',
//     img: 'img/room.jpg',
//     rating: 4,
//     valuePerNight: 80,
//     isPremium: false,
//     isBookmarked: true,
//   },
// ];
//
type AppProps = {
  offers: OfferType[];
}

export default function App ({offers}: AppProps){
  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute><Favourites favorites={favorites}/></PrivateRoute>} />
        <Route path="offer/">
          <Route path=":id" element={<Offer offers={offers}/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
