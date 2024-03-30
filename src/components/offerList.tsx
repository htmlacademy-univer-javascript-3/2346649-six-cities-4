import {OfferType} from '../types/offer.tsx';
import Card from './component.tsx';


type CardsListProps = {
  citiesCards: OfferType[];
};

function CardsList({citiesCards}: CardsListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {citiesCards.map((city) => (
        <Card key={city.id} place={city}/>
      ))}
    </div>
  );
}

export default CardsList;
