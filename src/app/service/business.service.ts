import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private apiUrl = 'https://localhost:7000/api/Business';
  private cus_ApiUrl = 'https://localhost:7000/api/Customer';

  // private apiUrl = 'https://greatbluepen79.conveyor.cloud/api/Business';
  // private cus_ApiUrl = 'https://greatbluepen79.conveyor.cloud/api/Customer';


  constructor(private http: HttpClient) {}

  registerBusiness(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}`, formData);
  }

  registerCustomer(inputdata:any)
  {
    return this.http.post(this.cus_ApiUrl, inputdata);
  }

  searchBusinesses(category: string, subcategory: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?category=${category}&subcategory=${subcategory}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCategories`);
  }

  getImage(imagename: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getSubCategories(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetSubCategories/${categoryId}`);
  }
}
