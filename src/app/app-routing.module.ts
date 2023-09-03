import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, canActivateAdminPanel } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { HomeComponent } from './home/pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    {
        path: 'app',
        canActivate: [canActivateAdminPanel],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'Dashboard' }
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        data: { title: 'Sign Up' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
