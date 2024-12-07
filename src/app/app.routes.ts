import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'add-user', component: AddUserComponent },
            { path: 'alluser', component: UserListComponent },
            { path: 'edit-user/:nationalCode', component: UserEditComponent },
          ],
        
    }
];
