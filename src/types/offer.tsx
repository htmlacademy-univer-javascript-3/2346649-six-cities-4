export type Review = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: User;
};

export type ReviewProps = {
  date: string;
  img: string;
  name: string;
  rating: number;
  text: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: Location;
  name: string;
};

export type Point = {
  id: string;
  lat: number;
  lng: number;
  title: string;
};

export type OfferType = {
  city: City;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

export type User = Host;

export type Place = {
  id: string;
  image: string;
  isFavorite: boolean;
  isPremium?: boolean;
  onListItemHover?: (listItemName: string) => void;
  price: number;
  rating?: number;
  roomName: string;
  roomType: string;
};

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  NoAuth = 'NO_AUTH',
  Auth = 'AUTH',
}

export type InitialStateOffer = {
  city: string;
  cityOffers: OfferType[];
  currentOffer: FullOffer | undefined;
  currentReviews: Review[];
  isOffersDataLoading: boolean;
  offers: OfferType[];
};

export type InitialStateUser = {
  authorizationStatus: AuthorizationStatus;
  isUserDataLoading: boolean;
  userLogin: string | null;
};

export type InitialStateFavourites = {
  favourites: OfferType[];
  favouritesCounter: number;
  isFavouriteDataLoading: boolean;
};

export type UserData = {
  email: string;
  id: number;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export enum APIRoutes {
  Offers = '/offers',
  Favourite = '/favorite',
  Review = '/comments',
  UserLogin = '/login',
  UserLogout = '/logout'
}

export type ReviewData = {
  id: string;
  rating: number;
  comment: string;
};
