import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface registerClient {
  name: string,
  email: string,
  phone: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  registerByForm(registerFormData: registerClient): Observable<any> {
    return this.http
      .post(
        "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/auth/client/register",
        {
          name: registerFormData.name,
          email: registerFormData.email,
          phone: registerFormData.phone,
          password: registerFormData.password
        })
  }

  signInByForm(signInData: { email: string, password: string }): Observable<any> {
    return this.http
      .post(
        "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/auth/login",
        {
          login: signInData.email,
          password: signInData.password
        }
      )
  }

  getClientProfile(): Observable<any> {
    let token: any = localStorage.getItem("token");
    return this.http
      .get(
        "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/clients/profile",
        {
          headers: { 'Authorization': `Bearer ${JSON.parse(token).accessToken}` }
        })
  }

  deleteAccount(): Observable<any> {
    let token: any = localStorage.getItem("token")
    return this.http
      .delete("https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/clients/profile",
        { headers: { 'Authorization': `Bearer ${JSON.parse(token).accessToken}` } }
      )
  }

  addNewCard(cardData: any): Observable<any> {
    let token: any = localStorage.getItem("token");
    return this.http.post(
                          "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/clients/payments",
                          {
                            cardNumber: cardData.cardNumber,
                            date: cardData.cardDate,
                            cvv: +cardData.cardCvv
                          },
                          { headers: { 'Authorization': `Bearer ${JSON.parse(token).accessToken}` } }
                        )
  }

  getAllCards(): Observable<any>{
    let token: any = localStorage.getItem("token");
    return this.http.get(
                        "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/clients/payments",
                        { headers: { 'Authorization': `Bearer ${JSON.parse(token).accessToken}` } }
                      )
  }

}
