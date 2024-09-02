import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {
    provideHttpClient,
    HttpClient,
    HttpClientModule,
} from '@angular/common/http';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, HttpClientModule],
})
export class AuthModule {}
