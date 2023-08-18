import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  login_flag: boolean | undefined;
  @Output() formflag= new EventEmitter<boolean> ();
  clicked(){
    this.login_flag = true;
    this.formflag.emit(this.login_flag);
  }
}
