import { createReducer, on } from '@ngrx/store';
import { initialState, SharedState } from '.';
import { SharedActions } from './actions'

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.setLoading, (state, action): SharedState => {
    return {
      ...state,
      showLoading: action.status
    }
  })
)