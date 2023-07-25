import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  url = 'http://localhost:3000/seller';

  constructor(private http: HttpClient) { }

  userSignUp(data: SignUp) {
    return this.http.post(this.url, data);
  }

}
