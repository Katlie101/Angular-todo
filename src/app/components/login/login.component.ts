import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
loginForm= new FormControl();
username: any
password: any
invalid:any





  
  constructor(private authService:AuthService,private router:Router) {
  
  }

  
ngOnInit() {
  this.loginForm = new FormControl ({
    username: new FormControl(this.username, [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl (this.password, [
      Validators.maxLength(8),
    ])
  });
}


  login(){
    this.authService.login(this.username, this.password)
    this.router.navigate(['/todolist'])
  }


onSubmit() {
}

}

