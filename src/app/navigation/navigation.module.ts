import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '../shared.module';

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { ModalUserDetailComponent } from '../components/modal-user-detail/modal-user-detail.component';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { LoadingComponent } from '../components/loading/loading.component'
import { MapComponent } from '../components/map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AvatarComponent,
    ModalUserDetailComponent,
    UserCardComponent,
    LoadingComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LeafletModule
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    AvatarComponent,
    ModalUserDetailComponent,
    UserCardComponent,
    MapComponent
  ]
})

export class NavigationModule {
}
