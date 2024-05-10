import {OfferType} from '../types/offer';

export const offers: OfferType[] = [
  {
    id: '0',
    name: 'Beautiful &amp; luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    valuePerNight: 120,
    type: 'Apartment',
    rating: 4.4,
    isBookmarked: true,
    isFavorite: true,
    review: [{
      id: 0,
      author: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
      rating: 5,
      date: 'April 2021',
      description: 'Great place and great apartment!'
    }],
    isPremium: true,
    city: {
      name: 'Amsterdam',
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 5
    },
    img: ['img/apartment-01.jpg']
  },
  {
    id: '1',
    name: 'Wood and stone place',
    description: 'Good room at the centre of city',
    valuePerNight: 100,
    type: 'Room',
    rating: 5,
    isBookmarked: false,
    isFavorite: true,
    review: [{
      id: 1,
      author: 'Max',
      avatar: 'img/avatar-max.jpg',
      isPro: false,
      rating: 5,
      date: 'December 2022',
      description: 'An independent House, strategically located between Rembrand\n' +
        '                  Square and National Opera, but where the bustle of the city\n' +
        '                  comes to rest in this alley flowery and colorful.'
    }],
    isPremium: true,
    city: {
      name: 'Amsterdam',
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 5
    },
    img: ['img/apartment-02.jpg']
  },
  {
    id: '2',
    name: 'Apartment',
    description: 'Nice, cozy, warm big bed apartment',
    valuePerNight: 180,
    type: 'Apartment',
    rating: 5,
    isBookmarked: true,
    isFavorite: true,
    review: [{
      id: 2,
      author: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
      rating: 5,
      date: 'May 2024',
      description: 'Great place and great apartment!'
    }],
    isPremium: false,
    city: {
      name: 'Amsterdam',
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 5
    },
    img: ['img/apartment-03.jpg']
  },
  {
    id: '3',
    name: 'Room',
    description: 'A budget option with excellent views',
    valuePerNight: 52,
    type: 'Room',
    rating: 3.1,
    isBookmarked: false,
    isFavorite: false,
    review: [{
      id: 3,
      author: 'Max',
      avatar: 'img/avatar-max.jpg',
      isPro: false,
      rating: 2,
      date: 'October 2020',
      description: 'Canal View Prinsengracht is beautiful. Everything else is just crap'
    }],
    isPremium: true,
    city: {
      name: 'Amsterdam',
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 5
    },
    img: ['img/room.jpg']
  },
];
