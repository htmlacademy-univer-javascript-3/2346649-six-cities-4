import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus, FullOffer, OfferType, Review} from '../types/offer.tsx';

export const updateOffers = createAction<OfferType[]>('updateOffers');

export const updateCity = createAction<string>('updateCity');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setUserDataLoadingStatus = createAction<boolean>('data/setUserDataLoadingStatus');

export const updateCurrentOffer = createAction<FullOffer>('data/updateCurrentOffer');

export const updateCurrentReviews = createAction<Review[]>('data/updateCurrentComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const updateUserLogin = createAction<string | null>('user/updateUserLogin');

export const setFavouritesDataLoadingStatus = createAction<boolean>('favorites/setFavoritesDataLoadingStatus');

export const updateFavourites = createAction<OfferType[]>('favorites/updateFavorites');

export const updateFavouritesCounter = createAction<number>('favorites/updateFavoritesCounter');
