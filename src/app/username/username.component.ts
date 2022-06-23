import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName: string = '';
  userCreated: boolean = false;
  existingUsers = ['testUser', 'testUser2'];

  constructor() {
  }

  ngOnInit(): void {
  }

  addUserName = () => {
    this.userCreated = true;

    this.existingUsers.push(this.userName);
    console.log('all users', this.existingUsers);
    this.resetUserName();
  }

  resetUserName = () => {
    this.userName = '';
  }

  isButtonEnabled = () => {
    if (this.userName == '') {
      return true;
    }
    return false;
  }

}
