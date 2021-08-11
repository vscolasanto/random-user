import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { BaseService } from './base.service'

import { RandomUserRequest, RandomUserResponse } from '../models/random-user.model'


const filter = (obj: RandomUserRequest) => {
  const filter = Object.entries(obj).filter(([k, v]) => v);
  return new URLSearchParams(filter);
}

@Injectable()
export class RandomUserService extends BaseService {
  constructor(private http: HttpClient) {
    super()
  }

  getUsers(obj: RandomUserRequest): Observable<RandomUserResponse[]> {
    return this.http
      .get<RandomUserResponse[]>(
        `${this.urlRandomUser}/?${filter(obj)}`,
        this.headerJson()
      )
      .pipe(
        map(this.parseResponse),
        catchError(this.serviceError)
      )
  }
}
