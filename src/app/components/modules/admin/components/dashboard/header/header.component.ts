import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public login:LoginService, private snack: MatSnackBar, private router:Router ) { 
 
  }

  ngOnInit(): void {
  }
  

 

  public logout() {

    // this.snack.open('Thanks ' + this.login.getUser().firstName, 'You are Successrully Logout', {
    //   duration: 3000,
    // });

    this.snack.openFromComponent(SnackBarComponent,{
      duration:4000,
      data:{message:'Thanks'+ this.login.getUser().userName+', You are Successfuly Logout.'},
    });
    this.login.logout();
    // this.router.navigate(['login'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    // window.location.reload();
    // this.snack.open('Thanks', 'You are Successrully Logout' );       

    this.router.navigate(['']);
  }
}
