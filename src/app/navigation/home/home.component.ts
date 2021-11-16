import { Component, OnInit} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ModalUserDetailComponent } from 'src/app/components/modal-user-detail/modal-user-detail.component'
import {
  CountryEnums,
  RandomUserRequest,
  RandomUserResponse
} from 'src/app/models/random-user.model'
import { getError, getUsers } from 'src/app/state/users'
import { State } from 'src/app/state/app.state'

import { UserPageActions } from '../../state/users/actions';
import { SharedActions } from '../../state/shared/actions';
import { getLoading } from 'src/app/state/shared'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isLoading$: Observable<boolean>;

  users$: Observable<RandomUserResponse[] | null>
  error$: Observable<string>

  countries = Object.entries(CountryEnums).map(([v, k]) => ({
    initials: k,
    name: v
  }))

  quantities = [ 10, 20, 50 ]

  form = this.fb.group({
    nat: [''],
    results: [this.quantities[0]],
    gender: ['']
  })

  constructor(
    private store: Store<State>,
    public fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getLoading);
    this.users$ = this.store.select(getUsers);
    this.error$ = this.store.select(getError);
  }

  getRandomUsers(): void {
    const obj: RandomUserRequest = { ...this.form.value }

    this.store.dispatch(SharedActions.setLoading({ status: true }));
    this.store.dispatch(UserPageActions.loadUsers({ request: obj }));
  }

  openUserDetail(user: RandomUserResponse): void {
    this.store.dispatch(UserPageActions.setUserSelected({ userSelected: user }));
    this.dialog.open(ModalUserDetailComponent, { width: '680px' });
  }
}
