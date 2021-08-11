import { HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { throwError } from 'rxjs'
import { environment } from 'src/environments/environment'

export abstract class BaseService {
  protected urlRandomUser = environment.apiUrl

  protected headerJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  protected parseResponse(response: any) {
    return response.results || {}
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = []

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unkown Error') {
        customError.push('Ocorreu um erro desconhecido.')
        response.error.errors = customError
      }
    }
    console.error(response)
    return throwError(response)
  }
}
