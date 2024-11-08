import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'todolist', component: TodolistComponent, canActivate:[authGuard]},
];
