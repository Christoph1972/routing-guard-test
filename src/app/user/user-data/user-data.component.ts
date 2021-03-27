import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  user = new User();

}
