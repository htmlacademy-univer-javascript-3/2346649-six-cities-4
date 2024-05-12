import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, FullOffer, OfferType} from '../types/offer.tsx';

export const updateOffers = createAction('updateOffers',
  (value: OfferType[]) => ({
    payload: value
  })
);

export const updateCity = createAction<string>('updateCity');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setUserDataLoadingStatus = createAction<boolean>('data/setUserDataLoadingStatus');

export const updateCurrentOffer = createAction<FullOffer>('data/updateCurrentOffer');

export const updateCurrentReviews = createAction<[]>('data/updateCurrentComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const updateUserLogin = createAction<string | null>('user/updateUserLogin');
