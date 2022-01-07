import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileEditComponent } from './profile-edit.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

fdescribe('ProfileEditComponent', () => {
  let component: ProfileEditComponent;
  let fixture: ComponentFixture<ProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        Validators
      ]

    })
    // ensures compilation before execution
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('is form valid', ()=>{
    let fName = component.customerForm.controls["firstName"];
    let DOBTest = component.customerForm.controls["DOB"];
    let lName = component.customerForm.controls["lastName"];
    let addressTest = component.customerForm.controls["Address"];
    let emailTest = component.customerForm.controls["email"];
    let phoneTest = component.customerForm.controls["phone"];
    let noticeTest = component.customerForm.controls["notification"];

    fName.setValue("ABC")
    lName.setValue("DEF")
    addressTest.setValue("GHI")
    emailTest.setValue("JKL@PQR")
    phoneTest.setValue("MNO")
    noticeTest.setValue("email")
    DOBTest.setValue("MM/DD/YYYY")

    expect(component.customerForm.valid).toBeTruthy();
  })

  it('form is invalid without @ in email',()=>{
    let emailTest = component.customerForm.controls["email"];
    emailTest.setValue("ABCD")  
    
    expect(component.customerForm.valid).toBeFalsy();
    expect(component.customerForm.controls["email"].valid).toBeFalsy();
  })

  it('form is invalid for First Name less than 3 Characters',()=>{
    let firstnameTest = component.customerForm.controls["firstName"];
    firstnameTest.setValue("AB")  
    
    expect(component.customerForm.valid).toBeFalsy();
    expect(component.customerForm.controls["firstName"].valid).toBeFalsy();
    expect(firstnameTest.errors["minlength"]).toBeDefined();
  })

  it('Checking custom validation on phone', ()=>{

    let phoneTest = component.customerForm.controls["phone"];
    phoneTest.setValue(null)

    // replicating custom function to check validity of phone
    function setNotification(notifyVia: string):void{
      const phoneControl = component.customerForm.get('phone');
      
      if(notifyVia === 'text')
        phoneControl.setValidators(Validators.required)
      
      else
        phoneControl.clearValidators();
      
      phoneControl.updateValueAndValidity();
    }

    // passing string "text" as parameter to instantiate 
    // validators on phone field
    setNotification("text")

    expect(component.customerForm.valid).toBeFalsy();
    expect(component.customerForm.controls["phone"].valid).toBeFalsy();
    
  })
});
