import {useAppDispatch, useAppSelector} from '../hooks';
import {useState} from 'react';
import {updateFavourite} from '../api/api-action.ts';
import {FavouritesStatus} from '../consts/favourites-consts.ts';
import {updateFavouritesCounter} from '../store/action.ts';
import {AuthorizationStatus, Place} from '../types/offer.tsx';
import ScrollTop from './scroll-top.tsx';
import {NavLink} from 'react-router-dom';
import {filters, rareCard} from '../consts/cities.tsx';

type FavouriteCardListProps = {
  favouriteCards: Place[];
  sortType: string;
}

const FavoriteCard = (props: Place) => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.user.authorizationStatus);
  const favoritesCounter = useAppSelector((state) => state.favourites.favouritesCounter);
  const [activeOfferId, setActiveOfferId] = useState('');
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  function handleMouseOver() {
    if (props.onListItemHover) {
      props.onListItemHover(props.id);
    }
    setActiveOfferId(props.id);
  }
  function handleIsFavorite() {
    if (isFavorite) {
      dispatch(updateFavourite({
        id: props.id,
        status: FavouritesStatus.DELETE
      }));
      setIsFavorite(false);
      dispatch(updateFavouritesCounter(favoritesCounter - 1));
    } else {
      dispatch(updateFavourite({
        id: props.id,
        status: FavouritesStatus.ADD
      }));
      setIsFavorite(true);
      dispatch(updateFavouritesCounter(favoritesCounter + 1));
    }
  }
  const authorized = (isAuthorized === AuthorizationStatus.Auth) && (
    <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
      type="button" onClick={handleIsFavorite}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To Bookmarks</span>
    </button>
  );
  return (
    <article className="favorites__card place-card" onMouseOver={handleMouseOver}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`${props.image}`} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorized}
        </div>
        {rareCard(props.rating)}
        <h2 className="place-card__name">
          <ScrollTop />
          <NavLink to={`/offer/${activeOfferId}`} >{props.roomType}</NavLink>
        </h2>
        <p className="place-card__type">{props.roomName}</p>
      </div>
    </article>
  );
};

const FavouriteCardList = ({favouriteCards, sortType}: FavouriteCardListProps) => {
  let sortedCards = favouriteCards;
  if (sortType) {
    switch (sortType) {
      case filters.LOW_TO_HIGH:
        sortedCards = [...favouriteCards].sort((a, b) => a.price - b.price);
        break;
      case filters.HIGH_TO_LOW:
        sortedCards = [...favouriteCards].sort((a, b) => b.price - a.price);
        break;
      case filters.TOP_RATED:
        sortedCards = [...favouriteCards].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <div>
      {sortedCards.map((item) => (
        <FavoriteCard key={item.id} {...item}/>
      ))}
    </div>
  );
};

export default FavouriteCardList;
