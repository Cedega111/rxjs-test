import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GorestService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  
  getUserList(status: string, email: string): Observable<any> {
    this.router.navigate([], { relativeTo: this.route, queryParams: {status, email}});
    return this.http.get<any>('https://gorest.co.in/public/v1/users', {params: {status: status, email: email}})
    .pipe(
      map(data => data["data"])
    )
  }
}