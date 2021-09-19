import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  formSubmit: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: this.fb.group({
        title: ['', [Validators.required]],
        first: ['', [Validators.required]],
        last: ['', [Validators.required]],
      }),
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    })
  }

  Submit() {
    this.formSubmit = true;
    if (this.userForm.invalid) {
      return;
    } else {
      let newUserValues = this.userForm.getRawValue();
      const userList = JSON.parse(localStorage.getItem('UserList'));
      userList.push({user:newUserValues});
      localStorage.setItem('UserList', JSON.stringify(userList));
      this.router.navigate(['/home-main']);
    }
  }
  get f() {
    return this.userForm.controls;
  }
}
