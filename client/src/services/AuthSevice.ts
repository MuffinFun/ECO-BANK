import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthService {
  static async registration(
    login: string,
    password: string,
    email: string,
    role?: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', {
      login,
      password,
      email,
      role,
    });
  }

  static async login(
    login: string,
    password: string,
    email: string,
    role?: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', {
      login,
      password,
      email,
      role,
    });
  }
  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
}
