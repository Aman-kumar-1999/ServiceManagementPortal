import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-vsm-tsm-header',
  templateUrl: './vsm-tsm-header.component.html',
  styleUrls: ['./vsm-tsm-header.component.css']
})
export class VsmTsmHeaderComponent implements OnInit {



  constructor(public login:LoginService, private snack: MatSnackBar, private router:Router ) { 
 
  }

  ngOnInit(): void {
  }
  

 

  public logout() {

   
    this.snack.openFromComponent(SnackBarComponent,{
      duration:4000,
      data:{message:'Thanks'+ this.login.getUser().userName+', You are Successfuly Logout.'},
    });
    this.login.logout();
    // this.router.navigate(['login'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    window.location.reload();
    // this.snack.open('Thanks', 'You are Successrully Logout' );       

    // this.router.navigate(['login']);
  }

}
