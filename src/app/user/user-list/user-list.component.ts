import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  ListOfUser: User[] = []

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  LoadUsers(): void {

    this.ListOfUser.push(new User("Franz Zumbusch", 33));
    this.ListOfUser.push(new User("Rudi Giesebrecht", 70));
    this.ListOfUser.push(new User("Friedhelm Müller", 61));
  }

}
