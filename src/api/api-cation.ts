import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {
  updateOffers,
  setOffersDataLoadingStatus,
  updateCurrentOffer,
  updateCurrentReviews, setUserDataLoadingStatus, updateUserLogin, requireAuthorization
} from '../store/action';
import {APIRoutes, AuthData, AuthorizationStatus, FullOffer, OfferType, UserData} from '../types/offer.tsx';
import {dropToken, saveToken} from '../types/token.ts';

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
    const {data} = await api.get<[]>(`/reviews/${id}`);
    dispatch(setOffersDataLoadingStatus(true));
    dispatch(updateCurrentReviews(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setUserDataLoadingStatus(true));
      const {data: {email}} = await api.get<UserData>(APIRoutes.UserLogin);
      dispatch(updateUserLogin(email));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(setUserDataLoadingStatus(false));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login, password}, {dispatch, extra: api}) => {
    dispatch(setUserDataLoadingStatus(true));
    const {data: {token, email}} = await api.post<UserData>(APIRoutes.UserLogin, {email: login, password});
    dispatch(updateUserLogin(email));
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserDataLoadingStatus(false));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setUserDataLoadingStatus(true));
    await api.delete(APIRoutes.UserLogout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserDataLoadingStatus(false));
  },
);
