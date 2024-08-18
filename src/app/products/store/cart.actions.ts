import { createAction, props } from '@ngrx/store';

export const incrementQuantity = createAction(
  '[Quantity] Increment Quantity'
);

export const decrementQuantity = createAction(
  '[Quantity] Decrement Quantity'
);
