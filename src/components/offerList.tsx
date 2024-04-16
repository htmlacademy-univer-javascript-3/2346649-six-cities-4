import Card, {Place} from './component.tsx';
import {filters} from '../mocks/cities.tsx';


type CardsListProps = {
  citiesCards: Place[];
  sortType: string;
};

function CardsList({citiesCards, sortType}: CardsListProps): JSX.Element {
  let sortedCards = citiesCards;
  if (sortType) {
    switch (sortType) {
      case filters.LOW_TO_HIGH:
        sortedCards = [...citiesCards].sort((a, b) => a.valuePerNight - b.valuePerNight);
        break;
      case filters.HIGH_TO_LOW:
        sortedCards = [...citiesCards].sort((a, b) => b.valuePerNight - a.valuePerNight);
        break;
      case filters.TOP_RATED:
        sortedCards = [...citiesCards].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedCards.map((place) => (
        <Card key={place.id} id={place.id} isPremium={place.isPremium} img={place.img} name={place.name} type={place.type} isBookmarked={place.isBookmarked}
          valuePerNight={place.valuePerNight} rating={place.rating} onListItemHover={place.onListItemHover}
        />
      ))}
    </div>
  );
}

export default CardsList;
