import { Component, OnInit } from '@angular/core';
import { GorestService } from '../services/gorest.service';
import { UsersInterface } from '../interfaces/users';
import { concat, debounceTime, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  users$!: Observable<UsersInterface[]>;
  filterForm!: FormGroup;
  
  emailUrl: string = '';
  statusUrl: string = '';

  constructor(
    private gorestService: GorestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.emailUrl = this.route.snapshot.queryParams["email"];
    this.statusUrl = this.route.snapshot.queryParams["status"];
    this.setForm();
    this.getUsersList()
  }

  setForm() {
    this.filterForm = this.formBuilder.group({
      email: [this.emailUrl || ''],
      status: [this.statusUrl == 'active' ? true : false],
    });
  }

  getUsersList() {  
    const start$ = this.gorestService.getUserList(this.statusUrl, this.emailUrl);
    const search$ = this.filterForm.valueChanges.pipe(
      debounceTime(400),
      switchMap(value => {
        return this.gorestService.getUserList(value.status ? 'active' : 'inactive', value.email)
      }),
    )
    this.users$ = concat(start$, search$);
  }
}
