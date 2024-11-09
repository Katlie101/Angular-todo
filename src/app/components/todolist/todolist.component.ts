import { NgFor, CommonModule, NgIf, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})


export class TodolistComponent {
  toDoForm!: FormGroup
  setDate= new Date();

  todos: string[]=["Grab coffee", "Take a shower", "Meet up with the rents", "Pay overdue fees"]
  
  


  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Router) { 
    this.toDoForm=this.formBuilder.group({
      toDoItem: new FormControl('',[Validators.required, Validators.minLength(2)]),
      setDate: new FormControl(this.setDate.toDateString())
    })
     

  }

  addTodo(todo:string) {
    this.todos.push(todo)
  }

  removeTodo(currentTodo:string) {
    this.todos=this.todos.filter((todo)=>todo !== currentTodo)
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
  
  onSubmit(){
    this.toDoForm.value
  }

  





}