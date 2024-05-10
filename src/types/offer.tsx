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
}

export type FullOffer = OfferType & {
  location: Location;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
}
