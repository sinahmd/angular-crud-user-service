import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      nationalCode: new FormControl({ value: '', disabled: true }, [Validators.required]),
    });
  }

  ngOnInit(): void {
    const nationalCode = this.route.snapshot.paramMap.get('nationalCode');
    if (nationalCode) {
      this.loadUserData(nationalCode);
    }
  }

  loadUserData(nationalCode: string): void {
    this.userService.getUsers().subscribe((users) => {
      const user = users.find((u: any) => u.nationalCode.toString() === nationalCode);
      if (user) {
        this.formGroup.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          nationalCode: user.nationalCode,
        });
      } else {
        alert('User not found!');
        this.router.navigate(['/alluser']);
      }
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const updatedUser = {
        ...this.formGroup.getRawValue(), 
      };
      this.userService.editUser(updatedUser).subscribe({
        next: (d) => {
          console.log(d,"dd")
          // return this this.formGroup = d
          alert('succus!');
          this.router.navigate(['/alluser']);
        },
        error: (err) => {
          console.error('error', err);
          alert('failed');
        },
      });
    }
  }
}
