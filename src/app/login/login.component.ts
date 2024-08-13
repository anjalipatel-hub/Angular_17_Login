import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  loginForm!: FormGroup;
  users!: User[];

  constructor(private messageService: MessageService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  onSubmit(): void {
    const user = this.users.find(
      (u) => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
    );
    if (user) {
      console.log('Login successful');
    } else {
      console.log('Invalid email or password');
    }
    this.messageService.add({
      key: 'successToast',
      severity: 'success',
      summary: 'Success',
      detail: 'Login successful!'
    });
  }

}
