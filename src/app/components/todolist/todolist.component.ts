import { NgFor, CommonModule, NgIf, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, SelectControlValueAccessor, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})


export class TodolistComponent {
  todo: any
  task: any
  
  todos = [{
    task: '',
    priority: '',
    dueDate: new Date()
  },
  {
    task: "Grab coffee",
    priority: 'Low',
    dueDate: new Date()
  },
    {
      task: "Take a shower",
      priority: 'High',
      dueDate: new Date()

    },
    {
      task: "Meet up with the rents",
      priority: 'Medium',
      dueDate: new Date()
    },
    {
      task: "Pay overdue fees",
      priority: 'High',
      dueDate: new Date()

    }

]; 

newTodo = '';
newPriority = 'Low';
newDueDate = new Date();
  


  constructor(private authService:AuthService, private router:Router ) {

  }

  ngOnInit (){}

  addTodo()  {
    this.todos.push({task: this.newTodo,
      priority: this.newPriority,
      dueDate: this.newDueDate
     });
     this.newTodo = '';
    this.newPriority = 'Low';
    this.newDueDate = new Date()
     
  }

  removeTodo(currentTodo:string) {
    this.todo=this.todo.filter((todo: string)=>todo !== currentTodo)
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
  
  onSubmit(){
    this
  }

}