import Card from './card.tsx';
import {filters} from '../consts/cities.tsx';
import {Place} from '../types/offer.tsx';


type CardsListProps = {
  citiesCards: Place[];
  sortType: string;
};

function CardsList({citiesCards, sortType}: CardsListProps): JSX.Element {
  let sortedCards = citiesCards;
  if (sortType) {
    switch (sortType) {
      case filters.LOW_TO_HIGH:
        sortedCards = [...citiesCards].sort((a, b) => a.price - b.price);
        break;
      case filters.HIGH_TO_LOW:
        sortedCards = [...citiesCards].sort((a, b) => b.price - a.price);
        break;
      case filters.TOP_RATED:
        sortedCards = [...citiesCards].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedCards.map((place) => (
        <Card key={place.id} {...place}/>
      ))}
    </div>
  );
}

export default CardsList;
