import {createAction} from '@reduxjs/toolkit';
import {FullOffer, OfferType, Review} from '../types/offer.tsx';

export const updateOffers = createAction('updateOffers',
  (value: OfferType[]) => ({
    payload: value
  })
);

export const updateCity = createAction<string>('updateCity');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const updateCurrentOffer = createAction<FullOffer>('data/updateCurrentOffer');

export const updateCurrentComments = createAction<Review[]>('data/updateCurrentComments');
