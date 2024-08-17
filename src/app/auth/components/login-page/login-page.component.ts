import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit
{
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  )
  {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void
  {
  }

  onSubmit(): void
  {
    if (this.loginForm?.valid)
    {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: (response: any) =>
        {
          this.router.navigate(['/products']);
          this.handleToken(response.token);
        },
        error: (error: Error) =>
        {
          console.error('Login failed:', error);
        }
      });
    }
  }

  handleToken(token: string)
  {
    // TODO maybe encrypt token and key
    localStorage.setItem('authToken', token);
  }
}
