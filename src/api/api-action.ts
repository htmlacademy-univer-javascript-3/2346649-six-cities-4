import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {
  requireAuthorization, setFavouritesDataLoadingStatus,
  setOffersDataLoadingStatus,
  setUserDataLoadingStatus,
  updateCurrentOffer,
  updateCurrentReviews, updateFavourites,
  updateOffers, updateUserLogin
} from '../store/action.ts';
import {
  APIRoutes,
  AuthData,
  AuthorizationStatus,
  FullOffer,
  OfferType,
  Review,
  ReviewData,
  UserData
} from '../types/offer.tsx';
import {dropToken, saveToken} from '../types/token.ts';
import {FavouritesData} from '../consts/favourites-consts.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoutes.Offers);
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
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<FullOffer>(APIRoutes.Offers.concat(`/${id}`));
    dispatch(updateCurrentOffer(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, { id: string | undefined }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({ id }, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Review[]>(`${APIRoutes.Review}/${id}`);
    dispatch(updateCurrentReviews(data));
    dispatch(setOffersDataLoadingStatus(false));
  }
);

export const postReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postCommentAction',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setUserDataLoadingStatus(true));
    const url = `${APIRoutes.Review}/${id}`;
    await api.post<UserData>(url, { comment, rating });
    dispatch(setUserDataLoadingStatus(false));
  }
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

export const fetchFavourites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFavouritesDataLoadingStatus(true));
      const { data } = await api.get<OfferType[]>(APIRoutes.Favourite);
      dispatch(updateFavourites(data));
    } catch {
      dispatch(updateFavourites([]));
    } finally {
      dispatch(setFavouritesDataLoadingStatus(false));
    }
  },
);

export const updateFavourite = createAsyncThunk<void, FavouritesData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/updateFavorite',
  async ({id, status}, {dispatch, extra: api}) => {
    dispatch(setFavouritesDataLoadingStatus(true));
    await api.post<UserData>(APIRoutes.Favourite.concat(`/${id}/${status}`));
    dispatch(setFavouritesDataLoadingStatus(false));
  },
);
