export type Review = {
  id: number;
  author: string;
  avatar: string;
  isPro: boolean;
  rating: number;
  date: string;
  description: string;
};

export type Point = {
  name: string;
  lat: number;
  lng: number;
};

export type City =
  Point & {
  zoom: number;
};

export type OfferType = {
  id: string;
  name: string;
  description: string;
  img: string[];
  valuePerNight: number;
  type: string;
  isBookmarked: boolean;
  rating: number;
  review: Review[];
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
};

export type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
};

export type FullOffer = OfferType & {
  location: Location;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type InitialState = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isOffersDataLoading: boolean;
  currentOffer: FullOffer | undefined;
  currentReviews: [];
  isUserDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userLogin: string | null;
};

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export enum APIRoutes {
  Offers = '/offers',
  Favourite = '/favorite',
  Comments = '/comments',
  UserLogin = '/login',
  UserLogout = '/logout'
}

export type ReviewData = {
  id: string;
  review: string;
  rating: number;
};
