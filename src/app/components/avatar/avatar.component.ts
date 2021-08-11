import { Component, Input, OnInit } from '@angular/core'
import { UserPicture } from 'src/app/models/random-user.model'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() pictures!: UserPicture
  @Input() avatarAlt!: string
  @Input() avatarSize!: 'thumb' | 'medium' | 'large'

  avatarUrl!: string

  constructor() { }

  ngOnInit(): void {
    this.defineSize(this.pictures)
  }

  defineSize(pictures: UserPicture) {
    switch(this.avatarSize) {
      case 'thumb':
        this.avatarUrl = pictures.thumbnail
        break
      case 'medium':
        this.avatarUrl = pictures.medium
        break
      case 'large':
        this.avatarUrl = pictures.large
        break
    }
  }
}
