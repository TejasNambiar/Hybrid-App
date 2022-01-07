import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  tempArray: Array<any> = []
  tempArray2: Array<any> = []
  customerForm: FormGroup | any;

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfileDetail()
                       .subscribe( data =>{
                          this.tempArray2 = data
                          
    console.log("inside ts file: tempArray2: "+data)
                       })   
    console.log("inside ts file: tempArray2: "+this.tempArray2) 

    this.customerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]],
      phone: '',
      notification: 'email',
      DOB: [null, Validators.required],
      sendCatalog: true
    });

  }

  addProfile(){
    this.profileService
        .addProfileDetails(this.customerForm.value)
        .subscribe( (profile : any) =>{
          console.log("data added successfully")
          this.tempArray2 = profile
          console.log(this.tempArray2)
        }, (err) =>{
          console.log("error => "+JSON.stringify(err.error.userName))

        })
  }

  setNotification(notifyVia: string):void{
    const phoneControl = this.customerForm.get('phone');
    
    if(notifyVia === 'text')
      phoneControl.setValidators(Validators.required)
    
    else
      phoneControl.clearValidators();
    
    phoneControl.updateValueAndValidity();
  }

  save() {
    console.log(this.customerForm.form);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }  
}
