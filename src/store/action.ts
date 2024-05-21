import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, FullOffer, OfferType, Review} from '../types/offer.tsx';

export const updateOffers = createAction<OfferType[]>('updateOffers');

export const updateCity = createAction<string>('updateCity');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setUserDataLoadingStatus = createAction<boolean>('data/setUserDataLoadingStatus');

export const updateCurrentOffer = createAction<FullOffer>('data/updateCurrentOffer');

export const setFavouritesDataLoadingStatus = createAction<boolean>('favourites/setFavouritesDataLoadingStatus');

export const updateFavourites = createAction<OfferType[]>('favourites/updateFavorites');

export const updateFavouritesCounter = createAction<number>('favourites/updateFavoritesCounter');

export const updateCurrentReviews = createAction<Review[]>('data/updateCurrentReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const updateUserLogin = createAction<string | null>('user/updateUserLogin');
