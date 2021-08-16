import { Component, Input, OnInit } from '@angular/core'
import { UserPicture } from 'src/app/models/random-user.model'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() pictures: UserPicture
  @Input() avatarAlt: string
  @Input() avatarSize: 'thumb' | 'medium' | 'large'

  avatarUrl: string
  color: string;

  constructor() { }

  ngOnInit(): void {
    this.defineSize(this.pictures)
    // this.color = this.borderColor();
  }

  defineSize(pictures: UserPicture): void {
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

  // borderColor(): string {
  //   const color = `linear-gradient(0deg, #${this.generateColor()} 0%, #${this.generateColor()} 100%)`
  //   console.log(color);
  //   return color
  // }

  // generateColor(): string {
  //   return Math.floor(Math.random() * 16777215).toString(16)
  // }
}
