import { IUser } from '../models/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthSevice';
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../http';

export default class Store {
  userInfo = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(userInfo: IUser) {
    this.userInfo = userInfo;
  }
  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }
  async login(
    login: string,
    password: string,
    email: string,
    role?: string | 'USER'
  ) {
    try {
      const response = await AuthService.login(login, password, email, role);
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.userInfo);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }
  async registration(
    login: string,
    password: string,
    email: string,
    role?: string
  ) {
    try {
      const response = await AuthService.registration(
        login,
        password,
        email,
        role
      );
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.userInfo);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }
  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setIsAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        { withCredentials: true }
      );
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.userInfo);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    } finally {
      this.setIsLoading(false);
    }
  }
}
