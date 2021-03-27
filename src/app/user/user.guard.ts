import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {

    

    const param = route.paramMap.get('name');

    if (param !== null && param !== '') {

      const name = param.toString();

      const user = this.userService.GetUserByName(name)

      console.log("User Guard Result:", user);

      return user;
    }
    return new User("", -1);

  }

}


