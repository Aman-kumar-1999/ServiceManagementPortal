import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-vsm-tsm-my-account',
  templateUrl: './vsm-tsm-my-account.component.html',
  styleUrls: ['./vsm-tsm-my-account.component.css']
})
export class VsmTsmMyAccountComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }

}
