import { State } from './cart.reducer';

export const selectQuantity = (state: { quantity: State }) => state.quantity.quantity;
