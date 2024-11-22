import { Component, NgModule,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

task!:string

}
