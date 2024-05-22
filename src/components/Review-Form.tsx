import {ChangeEventHandler, FormEvent, MouseEventHandler, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchCommentsAction, postReviewAction} from '../api/api-action.ts';
import {AuthorizationStatus} from '../types/offer.tsx';

type ReviewFormProps = {
  offerId: string;
}

export default function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const dispatch = useAppDispatch();
  const handleRating: MouseEventHandler<HTMLInputElement> = (e) => {
    setRating(e.currentTarget.value);
  };
  const handleReviewText: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReviewText(e.currentTarget.value);
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction({
      id: offerId,
      comment: reviewText,
      rating: parseInt(rating, 10)
    }));
    setRating('');
    setReviewText('');
    dispatch(fetchCommentsAction({id: offerId}));
  };
  const isAuthorized = useAppSelector((state) => state.user.authorizationStatus);
  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit} >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={handleRating} defaultChecked={rating === '5'}></input>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={handleRating} defaultChecked={rating === '4'}></input>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={handleRating} defaultChecked={rating === '3'}></input>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={handleRating} defaultChecked={rating === '2'}></input>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={handleRating} defaultChecked={rating === '1'}></input>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={reviewText} onChange={handleReviewText} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please sign in, make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={rating === '' || reviewText.length < 50 || isAuthorized !== AuthorizationStatus.Auth} >Submit</button>
      </div>
    </form>
  );
}
