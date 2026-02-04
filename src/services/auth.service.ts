import { Injectable } from '@angular/core';
import { User } from '.././app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // REGISTER
  register(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // LOGIN
  login(credentials: { email: string; password: string }): boolean {
    const users = this.getUsers();

    return users.some(
      user =>
        user.email === credentials.email &&
        user.RPassword === credentials.password
    );
  }

  // GET USERS
  private getUsers(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
}

