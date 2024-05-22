import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization, setFavouritesDataLoadingStatus,
  setOffersDataLoadingStatus, setUserDataLoadingStatus,
  updateCity,
  updateCurrentOffer, updateCurrentReviews, updateFavourites, updateFavouritesCounter,
  updateOffers, updateUserLogin
} from './action.ts';
import {AuthorizationStatus, InitialStateFavourites, InitialStateOffer, InitialStateUser} from '../types/offer.tsx';

const initialStateOffer: InitialStateOffer = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isOffersDataLoading: true,
  currentOffer: undefined,
  currentReviews: []
};

const InitialStateFavourites: InitialStateFavourites = {
  favourites: [],
  favouritesCounter: 0,
  isFavouriteDataLoading: true
};

const InitialStateUser: InitialStateUser = {
  isUserDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userLogin: null
};

const OfferReducer = createReducer(initialStateOffer, (builder) => {
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
    });
});

const FavoutiesReducer = createReducer(InitialStateFavourites, (builder) => {
  builder
    .addCase(setFavouritesDataLoadingStatus, (state, action) => {
      state.isFavouriteDataLoading = action.payload;
    })
    .addCase(updateFavourites, (state, action) => {
      state.favourites = action.payload;
      state.favouritesCounter = state.favourites.length;
    })
    .addCase(updateFavouritesCounter, (state, action) => {
      state.favouritesCounter = action.payload;
    });
});

const UserReducer = createReducer(InitialStateUser, (builder) => {
  builder
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

export const reducer = combineReducers({
  user: UserReducer,
  offers: OfferReducer,
  favourites: FavoutiesReducer
});
