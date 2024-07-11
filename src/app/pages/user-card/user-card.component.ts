import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    nome: '',
    idade: 0
  };

  @Output() userInfo = new EventEmitter<User>();

  getDados(){
    this.userInfo.emit(this.user);
  }
}
