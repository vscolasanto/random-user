import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RandomUserResponse } from 'src/app/models/random-user.model';

export const USERS_STATE_NAME = 'users';

export interface UsersState {
  users: RandomUserResponse[] | null;
  userSelected: RandomUserResponse | null;
  error: string;
}

export const initialState: UsersState = {
  users: null,
  userSelected: null,
  error: ''
}

export const getUsersFeatureState = createFeatureSelector<UsersState>(USERS_STATE_NAME);

export const getUsers = createSelector(
  getUsersFeatureState,
  state => state.users
);

export const getError = createSelector(
  getUsersFeatureState,
  state => state.error
);

export const getUserSelected = createSelector(
  getUsersFeatureState,
  state => state.userSelected
);
