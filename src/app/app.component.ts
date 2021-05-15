import { Component, Inject, OnInit } from '@angular/core';

import { ENVIRONMENT } from './token/environment.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-di-all-faces';
  currentEnvironment = '';

  constructor(@Inject(ENVIRONMENT) public environment: any) {}

  ngOnInit(): void {
    this.currentEnvironment = this.environment.env;
  }
}
