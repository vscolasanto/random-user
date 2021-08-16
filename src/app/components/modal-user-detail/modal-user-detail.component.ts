import { Component, Inject, OnInit, ViewChild } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RandomUserResponse } from '../../models/random-user.model'

@Component({
  selector: 'app-modal-user-detail',
  templateUrl: './modal-user-detail.component.html',
  styleUrls: ['./modal-user-detail.component.scss']
})
export class ModalUserDetailComponent implements OnInit {
  user: RandomUserResponse
  showMap: boolean = false

  streetStateCountry: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) user: RandomUserResponse
  ) {
    this.user = user
  }

  ngOnInit(): void {
    this.streetStateCountry =
      `${this.user.location.street.name} ${this.user.location.state} ${this.user.location.country}`
  }

  toggleMap(): void {
    this.showMap = !this.showMap
  }
}
