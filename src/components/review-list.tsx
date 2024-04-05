import Reviews from './review.tsx';
import {Review} from '../types/offer.tsx';

type ReviewListProps = {
  reviews: Review[];
};

export default function ReviewsList({ reviews }: ReviewListProps) {
  return (
    <div>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <Reviews key={`${item.author}`} avatar={item.avatar} author={item.author} rating={item.rating}
            description={item.description} date={item.date} id={item.id} isPro={item.isPro}
          />
        ))}
      </ul>
    </div>
  );
}

