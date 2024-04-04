import ScrollTop from './scroll-top.tsx';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

export type Place = {
  id: string;
  isPremium: boolean;
  img: string;
  name: string;
  type: 'Apartment' | 'Room';
  valuePerNight: number;
  rating: number;
  isBookmarked: boolean;
  onListItemHover?: (listItemName: string) => void;
};

// type PlaceProps = {
//   place: Place;
// }

export default function Card(place: Place): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState('');
  function handleMouseOver() {
    if (place.onListItemHover) {
      place.onListItemHover(place.name);
    }
    setActiveOfferId(place.id);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver}>
      {place.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={place.img}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{place.valuePerNight}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${
            place.isBookmarked ? 'place-card__bookmark-button--active' : ''
          } button`} type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{place.isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${place.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <ScrollTop />
          <NavLink to={`/offer/${activeOfferId}`}>{place.name}</NavLink>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
