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

  constructor(private activatedRoute: ActivatedRoute) { }

  private subscribtion: Subscription | null = null;

  ngOnInit(): void {

    console.log("User Editor Init");

    this.subscribtion = this.activatedRoute.data.subscribe(x => {
      console.log("Incomming data ", x); //the incomming contains the expected data (name & age)
      this.user = x as User;
      this.name = x.name;
      // this.user.Name = x.Name;
      // this.user.Age = x.Age;
      console.log("Check user ", this.user);//user has values, but the binding doesn't show the vakues    
    });

  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }



  @Input()
  user !: User;

  @Input()
  name: string = "";

}
