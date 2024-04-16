import {createAction} from '@reduxjs/toolkit';

export const updateOffers = createAction('updateOffers',
  (value: string) => ({
    payload: value
  })
);
