import Card, {Place} from './component.tsx';


type CardsListProps = {
  citiesCards: Place[];
};

function CardsList({citiesCards}: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {citiesCards.map((place) => (
        <Card key={place.id} id={place.id} isPremium={place.isPremium} img={place.img} name={place.name} type={place.type} isBookmarked={place.isBookmarked}
          valuePerNight={place.valuePerNight} rating={place.rating} onListItemHover={place.onListItemHover}
        />
      ))}
    </div>
  );
}

export default CardsList;
