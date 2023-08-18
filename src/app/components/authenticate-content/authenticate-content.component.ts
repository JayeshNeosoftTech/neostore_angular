import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticate-content',
  templateUrl: './authenticate-content.component.html',
  styleUrls: ['./authenticate-content.component.scss']
})
export class AuthenticateContentComponent {
  login_flag = true;
  Getflag(flag:boolean){
    this.login_flag =flag;
    console.log("Flag send from signup form:", flag);
  }

  GetflagFromLogin(lflag: boolean){
    this.login_flag = lflag;
    console.log("Flag send from login form:", lflag);
  }
}
