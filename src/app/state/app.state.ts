import { SharedState, SHARED_STATE_NAME } from './shared';
import { sharedReducer } from './shared/shared.reducer';
import { UsersState, USERS_STATE_NAME } from './users';
import { usersReducer } from './users/users.reducer';

export interface State {
  [USERS_STATE_NAME]: UsersState,
  [SHARED_STATE_NAME]: SharedState
}

export const State = {
  [USERS_STATE_NAME]: usersReducer,
  [SHARED_STATE_NAME]: sharedReducer
}