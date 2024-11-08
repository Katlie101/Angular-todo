import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string=""
  password:string=""


  constructor(private authService:AuthService,private router:Router){}

  login(){
    this.authService.login(this.username,this.password)
    this.router.navigate(['/todolist'])
  }

}
