import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddUser } from '../../models/addUserModel';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  constructor(private userService: UserService, private router: Router) {}
  formGroup: FormGroup = new FormGroup<AddUser>({
    firstName:  new FormControl("",
    {nonNullable: true,
      validators:[Validators.required]}
      ),
    lastName:  new FormControl('',
     {
      nonNullable: true,
      validators:[Validators.required]}),
      nationalCode:  new FormControl(null,
      {
       nonNullable: true,
       validators:[Validators.required]})
  })

  userObserver: Observer<any> = {
    next: (response) => {
      console.log('succus', response);
      alert('user created successfully!');
      this.router.navigate(['/alluser']);
    },
    error: (err) => {
      console.error('error:', err);
      alert('failed');
    },
    complete: () => {
      console.log('Add user request complete.');
    },
  };

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.userService.addUser(this.formGroup.value).subscribe(this.userObserver);
    }
  }
} 
