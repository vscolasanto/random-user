import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ModalUserDetailComponent } from 'src/app/components/modal-user-detail/modal-user-detail.component'
import {
  CountryEnums,
  RandomUserRequest,
  RandomUserResponse
} from 'src/app/models/random-user.model'
import { RandomUserService } from 'src/app/services/random-user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isLoading: boolean

  users: RandomUserResponse[]

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
    private randomUserService: RandomUserService,
    public fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() { }

  getRandomUsers(): void {
    this.isLoading = true
    this.form.disable()

    const obj: RandomUserRequest = { ...this.form.value }

    this.randomUserService.getUsers(obj).subscribe(
      (success: RandomUserResponse[]) => this.users = success,
      (err: HttpErrorResponse) => console.log(err),
      () => {
        this.isLoading = false
        this.form.enable()
      }
    )
  }

  openUserDetail(user: any): void {
    this.dialog.open(ModalUserDetailComponent, {
      width: '680px',
      data: user
    })
  }
}
