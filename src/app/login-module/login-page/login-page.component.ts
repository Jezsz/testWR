import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/shared/httpservice.service';
import { loginData } from 'src/app/shared/models/loginData';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginDetailsForm: FormGroup;
  formSubmit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.loginDetailsForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  SubmitForm() {
    this.formSubmit = true;
    if (this.loginDetailsForm.valid) {
      this.httpService.validatUser().subscribe((resp: loginData) => {
        console.log(resp);
        if ((resp['username'] == this.f.username.value) && (resp['password'] == this.f.password.value)) {
          this.router.navigate(['/home-main']);
        } else {
          alert('Please enter valid credentials');
          this.reset()
        }

      });
    }
  }
  reset() {
    this.loginDetailsForm.reset();
    this.formSubmit = false;
  }
  get f() {
    return this.loginDetailsForm.controls;
  }

}
