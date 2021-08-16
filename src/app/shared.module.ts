import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMaterialModule } from './angular-material.module'
import { RandomUserService } from './services/random-user.service'
import { SearchLatitudeLongitudeService } from './services/search-lat-lng.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [
    RandomUserService,
    SearchLatitudeLongitudeService
  ],
})
export class SharedModule { }
