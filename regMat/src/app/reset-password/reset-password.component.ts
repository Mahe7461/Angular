import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { ResetRequestPayload } from '../reset-request.payload';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetRequestPayload: ResetRequestPayload;
  resetPasswordForm = this.fb.group({
    password: [null, [Validators.required]],
    repeatPassword: [null, Validators.required],
  });
  new_password='';
  old_password='';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private resetPasswordService: SharedService,
    //public translate: SharedService,
  ) {
    this.resetRequestPayload = {
      new_password: '',
      old_password: '',
      token: '',
    };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let tokenuid = params['token'];
      this.resetRequestPayload.token = tokenuid;
      if (!tokenuid) {
       // Swal.fire('Token not valid', 'Follow the link on your email', 'error');
        this.router.navigateByUrl('auth/login');
      }
    });
  }
  login(){

  }

  onSubmit() {
    if (
      this.resetPasswordForm.controls['repeatPassword'].value !=
      this.resetPasswordForm.controls['password'].value
    ) {
  //    Swal.fire(
        //this.translate.instant('ERROR'),
       // this.translate.instant('RESET-PASSWORD.REPEAT-INCORRECT'),
        'error'
    //  );
    } else {
      this.resetRequestPayload.new_password = this.resetPasswordForm.controls[
        'password'
      ].value;
      this.resetRequestPayload.old_password= this.resetPasswordForm.controls[
        'repeatPassword'
      ].value;

      this.resetPasswordService
        .resetPassword(this.resetRequestPayload)
        .subscribe(
          (res) => {
      //      Swal.fire(
      //        this.translate.instant('SUCCESS'),
        //      this.translate.instant('RESET-PASSWORD.SUCCESS'),
              'success'
          //  );
        //  },
          //(err) => {
            //Swal.fire(
          //    this.translate.instant('ERROR'),
              //err.error.message,
             // 'error'
           // );
          }
        );
    }
  }
}
