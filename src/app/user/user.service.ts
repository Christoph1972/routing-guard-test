import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { User } from './user/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private Users: User[] = [
    { Name: "Franz Zumbusch", Age: 33 },
    { Name: "Rudi Giesebrecht", Age: 66 },
    { Name: "Friedhelm Müller", Age: 99 }
  ];


  GetUserByName(name: string): User {

    // Do NOT use var: use let or const instead
    const result = this.Users.find(x => { return x.Name === name });

    // if (result !== null) {
    //   return result as User;
    // }
    // else {
    //   return new User("Undifened", -1);
    // }

    // See this: https://interglacial.com/javascript_spec/a-11.html#a-11.11
    // for understanding why you can use the OR operator this way
    return result || new User("Undefined", -1);
  }

  GetUser(): Observable<User[]> {

    return interval(2000).pipe(first(), switchMap(x => {

      return of(this.Users);

    }));
  }

}

