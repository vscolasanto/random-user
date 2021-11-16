import { createAction, props } from '@ngrx/store';
import { RandomUserResponse } from 'src/app/models/random-user.model';

export const loadUserSuccess = createAction(
  '[Users API] Load Users Success',
  props<{ users: RandomUserResponse[] }>()
);

export const loadUserError = createAction(
  '[Users API] Load Users Error',
  props<{ error: string }>()
);
