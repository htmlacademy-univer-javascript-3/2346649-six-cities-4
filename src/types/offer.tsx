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
  id: number;
  name: string;
  lat: number;
  lng: number;
};

export type City =
  Point & {
  zoom: number;
};

export type OfferType = {
  city: City;
  description: string;
  id: string;
  img: string;
  isBookmarked: boolean;
  isFavorite: boolean;
  isPremium: boolean;
  name: string;
  rating: number;
  review: Review[];
  type: string;
  valuePerNight: number;
  isFavourite: boolean;
};

export type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
};

export type Place = {
  id: string;
  isFavourite: boolean;
  isPremium: boolean;
  img: string;
  name: string;
  type: string;
  valuePerNight: number;
  rating: number;
  isBookmarked: boolean;
  onListItemHover?: (listItemName: string) => void;
};

export type FullOffer = OfferType & {
  location: Location;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
  images: string[];
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type InitialStateOffer = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isOffersDataLoading: boolean;
  currentOffer: FullOffer | undefined;
  currentReviews: Review[];
};

export type InitialStateUser = {
  isUserDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userLogin: string | null;
};

export type InitialStateFavourites = {
  isFavouriteDataLoading: boolean;
  favourites: OfferType[];
  favouritesCounter: number;
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
