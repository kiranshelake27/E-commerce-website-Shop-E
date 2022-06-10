import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { 

  }
  //  name=new FormControl("raj")
profileform=new FormGroup({
  name:new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required,Validators.email]),
  age: new FormControl(0,[Validators.min(18),Validators.max(30)]),
  city: new FormControl('',Validators.required),
  dob: new FormControl(''),
})


  ngOnInit(): void {
    
  }
  collectdata()
{
  console.log(this.profileform.value)
}
 get name():FormControl
 {
   return this.profileform.get("name") as FormControl
 }
 get email():FormControl
 {
   return this.profileform.get("email") as FormControl
 }
 get age():FormControl
 {
   return this.profileform.get("age") as FormControl
 }

}
