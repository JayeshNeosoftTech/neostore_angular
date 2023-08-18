import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  login_flag: boolean | undefined;

  @Output() formflagForSignup = new EventEmitter<boolean> ();
  changePage(){
    this.login_flag = false;
    this.formflagForSignup.emit(this.login_flag);
  }
}
