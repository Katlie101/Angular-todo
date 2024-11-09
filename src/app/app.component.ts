import { Component, NgModule,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  form = new FormGroup ({
    toDoItem: new FormControl ('')
  });

  
  
  logValue() {
    console.log(this.form.get('toDoItem')?.value);
  }  
}
