import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { SearchLatitudeLongitudeService } from 'src/app/services/search-lat-lng.service';
import { RandomUserService } from '../../services/random-user.service';
import { State } from '../app.state';
import { setLoading } from '../shared/actions/shared.actions';

import { UserApiActions, UserPageActions } from './actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: RandomUserService,
    private latitudeLongitudeService: SearchLatitudeLongitudeService,
    private store: Store<State>
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserPageActions.loadUsers),
      mergeMap(action => this.userService.getUsers(action.request).pipe(
        tap(r => console.log(r)),
        map(users => UserApiActions.loadUserSuccess({ users })),
        catchError(error => of(UserApiActions.loadUserError({ error: error.message }))),
        finalize(() => this.store.dispatch(setLoading({ status: false })))
      ))
    )
  });
}