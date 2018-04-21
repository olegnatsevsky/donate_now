import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router,
              @Inject(DOCUMENT) private document: any
  ) {

  }

  ngOnInit() {

  }

  steemconnectLogin() {
    this.document.location.href = 'http://localhost:5000/login';
  }

}
