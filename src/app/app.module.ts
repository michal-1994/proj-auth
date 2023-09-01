import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HomeModule,
        AuthModule,
        DashboardModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        provideToastr({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
