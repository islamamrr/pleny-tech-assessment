import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/app/core/services/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiClientService) { }

  login(username: string, password: string) {
    return this.apiService.post('auth/login', {
      username, password
    });
  }

  isAuthenticated(): boolean {
    // TODO implement actual token validity check
    return !!localStorage.getItem('authToken');
  }
}
