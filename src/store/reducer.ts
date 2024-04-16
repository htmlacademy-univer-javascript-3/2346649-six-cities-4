import {offers} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {updateOffers} from './action.ts';

const initialState = {
  city: 'Paris',
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateOffers, (state, action) => {
      state.city = action.payload;
      state.offers = offers;
    });
});

export default reducer;
