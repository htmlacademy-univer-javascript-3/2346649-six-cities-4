import {createReducer} from '@reduxjs/toolkit';
import {
  setOffersDataLoadingStatus,
  updateCity,
  updateCurrentComments,
  updateCurrentOffer,
  updateOffers
} from './action.ts';
import {FullOffer, OfferType, Review} from '../types/offer.tsx';

type InitialState = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isOffersDataLoading: boolean;
  currentOffer: FullOffer | undefined;
  currentReviews: Review[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isOffersDataLoading: true,
  currentOffer: undefined,
  currentReviews: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = state.offers.filter((o) => o.city.name === state.city);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((o) => o.city.name === state.city);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(updateCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(updateCurrentComments, (state, action) => {
      state.currentReviews = action.payload;
    });
});

export default reducer;
