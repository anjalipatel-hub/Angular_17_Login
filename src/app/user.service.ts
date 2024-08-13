import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost/signUp-angular';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/index.php`);
  }

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/index.php`, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/index.php?id=${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/index.php?id=${id}`);
  }

}
