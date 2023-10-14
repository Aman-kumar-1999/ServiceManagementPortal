import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/service/loader.service';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarErrorComponent } from 'src/app/snack-bar-error/snack-bar-error.component';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';



@Component({
  selector: 'app-circle-update-profile',
  templateUrl: './circle-update-profile.component.html',
  styleUrls: ['./circle-update-profile.component.css']
})
export class CircleUpdateProfileComponent implements OnInit {

  
  user = {
    "emailId":"",
    "address":"",
    "contactNo":"",
    "designation":"",
    "userName":"",
    "experience":""
  }
  


  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    // private router: Router,
    public loaderService : LoaderService,
    
  ) { }

  ngOnInit(): void { }
  formSubmit(){
    this.login.updateProfile(this.user).subscribe(
      (data:any)=>{
        
        
        // this.snack.open('Password has been changed successfuly','ok',{duration:5000,});
        this.snack.openFromComponent(SnackBarComponent,{
          duration:4000,
          data:{message:'Your Profile has been Updated successfuly'},
        });
      },
      (error)=>{
        // this.snack.open('Warning '
        // ,'Try Again',{duration:4200,});
        
        this.snack.openFromComponent(SnackBarErrorComponent,{
          data:{message:'You are unable to update your Profile'},
          duration:4000,
        });
     
      }
    );

  }

}
