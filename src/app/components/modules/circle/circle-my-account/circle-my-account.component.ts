import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-circle-my-account',
  templateUrl: './circle-my-account.component.html',
  styleUrls: ['./circle-my-account.component.css']
})
export class CircleMyAccountComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }

}
