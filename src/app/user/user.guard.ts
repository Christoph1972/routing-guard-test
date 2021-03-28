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

    /**
     * Avoid code pyramidalization changing the condition
     * Remember that null, as well as an empty string, return false
     * The condition declined in the if statement can be easier:
     */
    if (!param) {
      return new User("", -1);
    }

    /**
     * param is already a string, so there's no need to cast the value
     * with the toString method. If you are not interested logging the user returned
     * by the service, you can even directly return after invoking the method
     * 
     * A couple of quite important things:
     *   - functions and methods in JavaScript should be named in camelCase
     *   - when a function is named in PascalCase, it become an ES5 constructor:
     *     it's slightly slower than a traditional function, so be careful in
     *     different contexts
     *   - this is not a guard but a resolver  
     */

    
    return this.userService.GetUserByName(param);

    
    // if (param !== null && param !== '') {

    //   const name = param.toString();

    //   const user = this.userService.GetUserByName(name)

    //   console.log("User Guard Result:", user);

    //   return user;
    // }
    // return new User("", -1);

  }

}


