import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { MessageService } from 'primeng/api';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [MessageService]
})
export class SignUpComponent {
  signupForm!: FormGroup;
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', password: 'password123' }
  ];

  constructor( private messageService: MessageService, private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const user = new User();
    // (link unavailable) = this.users.length + 1;
    user.name = this.signupForm.value.name;
    user.email = this.signupForm.value.email;
    user.password = this.signupForm.value.password;
    this.users.push(user);
    this.userService.createUser(user).subscribe((response: any) => {
      console.log(response);
      this.messageService.add({ key: 'successToast', severity: 'success', summary: 'Success', detail: 'Signup successful!' });
      localStorage.setItem('users', JSON.stringify(this.users));
      console.log('Signup successful');
    });

    // localStorage.setItem('users', JSON.stringify(this.users));
    // console.log('Signup successful');
  }

}
