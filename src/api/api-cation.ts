import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { updateOffers, setOffersDataLoadingStatus, updateCurrentOffer, updateCurrentComments } from '../store/action';
import {FullOffer, OfferType, Review} from '../types/offer.tsx';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>('/offers');
    dispatch(setOffersDataLoadingStatus(true));
    dispatch(updateOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchSingleOfferAction = createAsyncThunk<void, { id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleOffer',
  async ({ id }, {dispatch, extra: api}) => {
    const {data} = await api.get<FullOffer>(`/offers/${id}`);
    dispatch(setOffersDataLoadingStatus(true));
    dispatch(updateCurrentOffer(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchСommentsAction = createAsyncThunk<void, { id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({ id }, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`/reviews/${id}`);
    dispatch(setOffersDataLoadingStatus(true));
    dispatch(updateCurrentComments(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);
