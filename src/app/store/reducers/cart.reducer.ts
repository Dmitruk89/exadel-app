import { ECartActionTypes, CartActions } from '../actions/cart.action';
import { initialCartState, ICartState } from '../state/cart.state';

export function CartReducers(
  state: ICartState = initialCartState,
  action: CartActions,
): ICartState {
  switch (action.type) {
    case ECartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

// export const scoreboardReducer = createReducer(
//     initialState,
//     on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//     on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//     on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//     on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
//   );
