import { createReducer, on } from '@ngrx/store';
import { initialState, UsersState } from '.';

import { UserApiActions, UserPageActions } from './actions';

export const usersReducer = createReducer<UsersState>(
  initialState,
  on(UserApiActions.loadUserSuccess, (state, action): UsersState => {
    return {
      ...state,
      users: action.users,
      error: ''
    }
  }),
  on(UserApiActions.loadUserError, (state, action): UsersState => {
    return {
      ...state,
      users: null,
      error: action.error
    }
  }),
  on(UserPageActions.setUserSelected, (state, action): UsersState => {
    return {
      ...state,
      userSelected: action.userSelected
    }
  })
);
