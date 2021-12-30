import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

function ratingRange(min: number, max:number): ValidatorFn{
  return (c: AbstractControl): {[key: string]:boolean} | null => {
  if(c.value !== null && (isNaN(c.value) || c.value <min || c.value >max))
    return {'range' :true};
  return null;
}
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  
  tempArray: Array<any> = []
  customerForm: FormGroup | any;

  constructor(private profile: ProfileService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.profile.getProfileDetails()
          .subscribe(data => this.tempArray = data); 

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email]],
      Address: ['',[Validators.required]],
      phone: '',
      notification: 'email',
      DOB: [null, Validators.required],
      sendCatalog: true
    });
    
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

  loadApiData(){
    this.customerForm.patchValue({
      firstName: this.tempArray[0].fname,
      lastName: this.tempArray[0].lname,
      Address:this.tempArray[0].address,
      email:this.tempArray[0].email
    })  
  }
}

