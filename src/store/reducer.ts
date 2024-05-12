import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setOffersDataLoadingStatus, setUserDataLoadingStatus,
  updateCity,
  updateCurrentOffer, updateCurrentReviews,
  updateOffers, updateUserLogin
} from './action.ts';
import {AuthorizationStatus, InitialState} from '../types/offer.tsx';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isOffersDataLoading: true,
  currentOffer: undefined,
  currentReviews: [],
  isUserDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userLogin: null
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
    .addCase(updateCurrentReviews, (state, action) => {
      state.currentReviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(updateUserLogin, (state, action) => {
      state.userLogin = action.payload;
    })
    .addCase(setUserDataLoadingStatus, (state, action) => {
      state.isUserDataLoading = action.payload;
    });
});

export default reducer;
