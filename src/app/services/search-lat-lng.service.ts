import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { BaseService } from './base.service'

@Injectable()
export class SearchLatitudeLongitudeService extends BaseService {
  constructor(private http: HttpClient) {
    super()
  }

  getLatitudeLongitude(address: string): Observable<any> {
    const addressReplaceSpace = address.replace(' ', '%20')

    return this.http
      .get(
        `${this.urlSearchLatLng}${addressReplaceSpace}`,
        this.headerJson()
      )
      .pipe(
        map(response => response),
        catchError(this.serviceError)
      )
  }
}
