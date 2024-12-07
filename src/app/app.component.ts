import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp-angular';

  // constructor(private http:HttpClient) {
  //   this.http.get('http://localhost:3000/api/users')
  // }
}
