import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit} from '@angular/core'
import {
  CountryEnums,
  GenderEnums,
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

  picture = {
    "large": "https://randomuser.me/api/portraits/women/55.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
  }

  constructor(
    private randomUserService: RandomUserService
  ) { }

  ngOnInit() {
    // this.getRandomUsers()
  }

  getRandomUsers() {
    const obj: RandomUserRequest = {
      gender: null,
      nat: null,
      results: 10,
    }

    this.randomUserService.getUsers(obj).subscribe(
      (success: RandomUserResponse[]) => console.log(success, JSON.stringify(success)),
      (err: HttpErrorResponse) => console.log(err),
    )
  }
}
