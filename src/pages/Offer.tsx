import {useParams} from 'react-router-dom';
import {AuthorizationStatus, OfferType} from '../types/offer.tsx';
import NotFoundPage from '../error/NotFound.tsx';
import ReviewsList from '../components/review-list.tsx';
import Map from '../components/cities-map.tsx';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useEffect, useState} from 'react';
import {fetchSingleOfferAction, fetchCommentsAction, updateFavourite} from '../api/api-action.ts';
import CardsList from '../components/offerList.tsx';
import {filters} from '../consts/cities.tsx';
import Spinner from './Loading-Screen.tsx';
import Header from './Header.tsx';
import ReviewForm from '../components/Review-Form.tsx';
import {setOffersDataLoadingStatus, updateFavouritesCounter} from '../store/action.ts';
import {FavouritesStatus} from '../consts/favourites-consts.ts';

type OffersProps = {
  offers: OfferType[];
}

export default function Offer ({offers}: OffersProps) {
  const isAuthorized = useAppSelector((state) => state.user.authorizationStatus);
  const favouritesCounter = useAppSelector((state) => state.favourites.favouritesCounter);
  const currentOffer = useAppSelector((state) => state.offers.currentOffer);
  const currentReviews = useAppSelector((state) => state.offers.currentReviews);
  const params = useParams();
  const offer = offers.find((o) => o.id === params.id);
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(offer?.isFavorite);
  const handleIsFavorite = () => {
    if (isFavorite) {
      dispatch(updateFavourite({
        id: currentOffer?.id,
        status: FavouritesStatus.DELETE
      }));
      setIsFavorite(false);
      dispatch(updateFavouritesCounter(favouritesCounter - 1));
    } else {
      dispatch(updateFavourite({
        id: currentOffer?.id,
        status: FavouritesStatus.ADD
      }));
      setIsFavorite(true);
      dispatch(updateFavouritesCounter(favouritesCounter + 1));
    }
  };
  useEffect(() => {
    if (offer?.id) {
      dispatch(fetchSingleOfferAction({id: offer.id}));
      dispatch(fetchCommentsAction({id: offer.id}));
      dispatch(setOffersDataLoadingStatus(false));
    }
  }, [dispatch, offer?.id]);
  const points = offers.map((item) => ({
    ...item.city
  }));
  if (!offer) {
    return (<NotFoundPage />);
  }
  if (!currentOffer) {
    return <Spinner />;
  }
  const selectedPoint = offers.find((o) => o.name === offer.city.name)?.city;
  const otherOffers = offers.filter((e) => e !== offer);
  const offerInside = currentOffer.goods.map((item) => (
    <li className="offer__inside-item" key={`${item}`}>
      {item}
    </li>
  ));
  const features = [
    currentOffer?.type.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase()),
    `${currentOffer?.bedrooms} Bedrooms`,
    `Max ${currentOffer?.maxAdults} adults`
  ];
  const offerFeatures = features.map((item) => (
    <li className="offer__feature offer__feature--entire" key={`${item}`}>
      {item}
    </li>
  ));
  const authorized = (isAuthorized === AuthorizationStatus.Auth) && (
    <button className={isFavorite ? 'offer__bookmark-button offer__bookmark-button--active button' : 'offer__bookmark-button button'} type="button" onClick={handleIsFavorite}>
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To Bookmarks</span>
    </button>
  );

  return (
    <div className="page">

      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer?.images.map((item) => (
                <div className="offer__image-wrapper" key={currentOffer.id}>
                  <img className="offer__image" src={item} alt={`Photo studio ${currentOffer.id}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>)}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.name}
                </h1>
                {authorized}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                {offerFeatures}
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.valuePerNight}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerInside}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatar}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  <span className="offer__user-status">{currentOffer.host.isPro ? 'Pro' : 'New'}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={currentReviews} />
                <ReviewForm offerId={currentOffer.id}/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={currentOffer.city} points={points} selectedPoint={selectedPoint}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
            Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList citiesCards={otherOffers.map((item) => ({...item}))} sortType={filters.TOP_RATED}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
