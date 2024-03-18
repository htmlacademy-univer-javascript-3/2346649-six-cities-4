type Review = {
  id: number;
  author: string;
  avatar: string;
  isPro: boolean;
  rating: number;
  date: string;
  description: string;
};

export type City = {
  'name': string;
};

export type OfferType = {
  id: number;
  name: string;
  description: string;
  img: string;
  valuePerNight: number;
  type: 'Apartment' | 'Room';
  isBookmarked: boolean;
  rating: number;
  review: Review;
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
};
