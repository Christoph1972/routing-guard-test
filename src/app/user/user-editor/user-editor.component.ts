import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user/User';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit, OnDestroy {

  @Input() name: string = '';
  public user!: User;

  constructor(private activatedRoute: ActivatedRoute) { }

  private subscribtion: Subscription | null = null;

  ngOnInit(): void {

    console.log("User Editor Init");

    this.subscribtion = this.activatedRoute.data.subscribe(x => {
      console.log("Incoming data ", x); //the incomming contains the expected data (name & age)
      // The following line is causing the problem: at this time, you have 
      // the x parameter that contains an object with the { user: User }
      // but you are telling TypeScript that the structure is different:
      // { age: number, name: string }
      // this.user = x as User;
      // this.name = x.name;
      // this.user.Name = x.Name;
      // this.user.Age = x.Age;
      // console.log("Check user ", this.user);//user has values, but the binding doesn't show the vakues    
    
      this.user = x.user;
    });

  }

  ngAfterViewInit() {
    console.log("view", this.user);
  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }

}
