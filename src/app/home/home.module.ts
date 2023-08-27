import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
    declarations: [HomeComponent, WelcomeComponent],
    imports: [CommonModule]
})
export class HomeModule {}
