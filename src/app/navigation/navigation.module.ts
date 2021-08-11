import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AvatarComponent } from '../components/avatar/avatar.component'

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    AvatarComponent
  ]
})

export class NavigationModule {
}
