import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UserList } from '../../models/addUserModel';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(private userService: UserService) {

  }
users: UserList[] = [];
  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (d) => {
        console.log(d)
        return this.users = d
      }
    })
  }
}
