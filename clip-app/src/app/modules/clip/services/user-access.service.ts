import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAccessService {
  private password() {
    if (prompt('Please enter your password') === 'admin') {
      return true;
    } else {
      alert('Your password is invalid. Please try again!');
      window.location.reload();
      return false;
    }
  }

  public personalCabinetAccess: Observable<boolean> = of(this.password());

  constructor() {}
}
