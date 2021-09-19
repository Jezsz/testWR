import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userList: any;
  // show: boolean = true;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if (!localStorage.getItem('UserList')) {
      this.route.data.subscribe(obj => {
        console.log(obj.data);
        localStorage.setItem('UserList', JSON.stringify(obj.data['results']));
        this.userList = obj.data['results'];
      });
    }
    else {
      this.userList = JSON.parse(localStorage.getItem('UserList'))
    }
  }
  CreateUser() {
    // this.show = false;
    this.router.navigate(['/home-main/new-user'])
  }
}
