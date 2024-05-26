export const filters = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

export const constCities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const rareCard = (rating: number | undefined) => {
  if (rating === undefined) {
    return (
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '0%'}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
    );
  }
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${rating * 20}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

export const rareOffer = (rating: number | undefined) => {
  if (rating === undefined) {
    return (
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: '0%'}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
    );
  }
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width: `${rating * 20}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
};
