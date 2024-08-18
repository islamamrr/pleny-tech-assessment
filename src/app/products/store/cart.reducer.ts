import { createReducer, on, Action } from '@ngrx/store';
import { decrementQuantity, incrementQuantity } from './cart.actions';

export interface State {
  quantity: number;
}

export const initialState: State = {
  quantity: 0
};

const _quantityReducer = createReducer(
  initialState,
  on(incrementQuantity, (state) => ({ ...state, quantity: state.quantity + 1 })),
  on(decrementQuantity, (state) => ({ ...state, quantity: state.quantity - 1 }))
);

export function quantityReducer(state: State | undefined, action: Action) {
  return _quantityReducer(state, action);
}
