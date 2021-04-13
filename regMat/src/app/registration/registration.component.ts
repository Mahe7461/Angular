import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ValidatePassword} from './validate-password';
import {FormErrorMessages, formErrorMessages} from '../form-errors-constant';
import { SharedService } from '../shared.service';
import * as Crypto from 'crypto-js'

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public submitted = false;
  public formValid: boolean;
  public registrationForm: FormGroup;
  public formErrorMessages: FormErrorMessages;

  public gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];
  covEncOutput:any;
  constructor(public readonly formBuilder: FormBuilder, private service: SharedService) {
  }
  
  convert(){
    
    this.covEncOutput= Crypto.AES.encrypt(this.pass.trim()).toString();
    console.log(this.covEncOutput)
  }
  pass:string='mahendra'  
  ngOnInit(): void {
    this.formErrorMessages = formErrorMessages;
    

    this.registrationForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        FirstName: ['', [Validators.required]],
        LastName: ['', [Validators.required]],
        ContactNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(64),
          Validators.pattern(/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)])],
        passwordConfirmation: ['', [Validators.required]],
        Department: ['',[Validators.required]],
        EmployeeId: ['',[Validators.required]],
        DOB: ['',[Validators.required]],
        gender: ['', Validators.required],
        KnownLanguage: ['',Validators.required],
      }, {
        validator: ValidatePassword.MatchPassword
      }
    )
    ;
  }
  
  selectedCountry: String = "--Choose Country--";
  State:any;
  city:any;
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'Bavaria', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'Aragon', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'Florida', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'Jalisco', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'TamilNadu', cities: ['Chennai', 'Vellore', 'Madurai', 'Salem']} ] },
	];
  
  
	states: Array<any> = [];

	
	cities: Array<any> = []; 
	
	
	changeCountry(country: any) { 
	
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; 
	}

	
	changeState(state: any) {
		
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
	}
	

  onSubmit(): boolean {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      this.formValid = false;
      return false;
    }
    this.formValid = true;
    console.log(this.registrationForm.value);
  }
  Register(){
  
    var val = {EmployeeId:this.registrationForm.value.EmployeeId,
               FirstName:this.registrationForm.value.FirstName,
              LastName:this.registrationForm.value.LastName,
              Email:this.registrationForm.value.email,
              DOB:this.registrationForm.value.DOB,
              ContactNumber:this.registrationForm.value.ContactNumber,
              Department:this.registrationForm.value.Department,
              Password:this.registrationForm.value.password,
              KnownLanguage:[this.sellang,this.registrationForm.value.KnownLanguage],
              State:this.State,
              Country:this.selectedCountry,
              City:this.city,
     
    };
    
   this.service.addEmployee(val).subscribe(data=>{
     alert(data.toString());
     
   });
   console.log(val)
   
 }
test(){
  console.log(this.covEncOutput)
  
}

  selectGender(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.registrationForm.get('gender').setValue(target.value, {onlySelf: true});
  }
  sellang:any=[];
  lang:any=[
    'Tamil','Telugu','Hindi','English'
  ];
  langdata=this.sellang;
 selectlang(Event:any): void{
  this.sellang= Event.target.value;
  
  
 }
  
}