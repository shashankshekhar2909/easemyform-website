import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
    // private baseUrl = 'api';
  private baseUrl = 'https://app.easemyform.com/api';


  getJobDetails = (filters?:any) => {
    console.log(filters);
    const params = new URLSearchParams();
    if(filters){
      if (filters._id) {
        params.append('_id', filters._id.toString());
        params.append('type', 'filter');
      }
    } else {
      params.append('type', 'all');
    }
    // const endPoint = this.baseUrl + this.globals.urlJoin('jobs', 'jobFeeds');
    return this.http.get(`${this.baseUrl}/job/job-feed-user-public?${params.toString()}`);
  }

  getJobList = (page:number,limit:number) => {
    const params = new URLSearchParams();
    params.append('type', 'all');
    params.append('page', page.toString());
    params.append('size', limit.toString());
    return this.http.get(`${this.baseUrl}/job/job-feed-user-public?${params.toString()}`);
  }
}
