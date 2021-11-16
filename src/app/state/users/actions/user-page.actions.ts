import { createAction, props } from '@ngrx/store';
import { RandomUserRequest, RandomUserResponse } from 'src/app/models/random-user.model';

export const loadUsers = createAction(
  '[Users Page] Load Users',
  props<{ request: RandomUserRequest }>()
);

export const setUserSelected = createAction(
  '[Users Page] Set User Selected',
  props<{ userSelected: RandomUserResponse }>()
);
