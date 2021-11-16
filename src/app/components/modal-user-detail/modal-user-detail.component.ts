import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from 'src/app/state/app.state'
import { getUserSelected } from 'src/app/state/users'
import { RandomUserResponse } from '../../models/random-user.model'

@Component({
  selector: 'app-modal-user-detail',
  templateUrl: './modal-user-detail.component.html',
  styleUrls: ['./modal-user-detail.component.scss']
})
export class ModalUserDetailComponent implements OnInit {
  user: RandomUserResponse | null;
  showMap: boolean = false

  streetStateCountry: string;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(getUserSelected).subscribe(user => this.user = user);

    this.streetStateCountry =
      `${this.user?.location.street.name} ${this.user?.location.state} ${this.user?.location.country}`
  }

  toggleMap(): void {
    this.showMap = !this.showMap
  }
}
